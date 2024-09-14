import https from 'https';
import fs, { existsSync, readdirSync, renameSync } from 'fs';
import path, { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import unzipper from 'unzipper';
import { platform } from 'node:os';
import inquirer from 'inquirer';
import {HttpsProxyAgent} from 'https-proxy-agent'
import progress from 'progress'
import {Readable} from 'stream'
const __dirname = dirname(fileURLToPath(import.meta.url));
const isDownloaded = existsSync(resolve(__dirname, `./ffmpeg/${platform()}`));
if (isDownloaded) process.exit(0);
let url = '';
switch (platform()) {
  case 'win32':
    url =
      'https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl-shared.zip';
    break;

  case 'linux':
    url =
      'https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl-shared.tar.xz';
    break;
  case 'darwin':
    url = 'https://evermeet.cx/ffmpeg/ffmpeg-7.0.2.7z';
    break;
}
console.log('下载ffmpeg')
const answers = await inquirer.prompt([
  {
    type: 'confirm',
    message: '是否开启代理',
    default:false,
    name: 'proxy',
  },
  {
    type: 'input',
    name: 'proxyUrl',
    message: '代理地址:',
    default: 'http://127.0.0.1:7890',
    when: (answers) => answers.proxy,
  },
]);
let proxy
if(answers.proxy) proxy = new HttpsProxyAgent(answers.proxyUrl)
const saveDir = resolve(__dirname, './ffmpeg');
async function deleteAllFilesInDirectory(directoryPath) {
  try {
    // 读取目录中的所有文件和文件夹
    const files = await fs.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stats = await fs.lstat(filePath);

      if (stats.isDirectory()) {
        // 如果是文件夹，递归删除其内部文件
        await deleteAllFilesInDirectory(filePath);
        // 删除空文件夹
        await fs.rmdir(filePath);
      } else {
        // 如果是文件，直接删除
        await fs.unlink(filePath);
      }
    }

    console.log(`All files in directory "${directoryPath}" have been deleted.`);
  } catch (error) {
    console.error(
      `Error while deleting files in directory "${directoryPath}":`,
      error,
    );
  }
}
function downloadFileAsync(uri, dest) {
  return new Promise((resolve, reject) => {
    https.get(
      uri,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        agent: proxy|| new https.Agent({ keepAlive: true }),
      },
     async (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          resolve(await downloadFileAsync(res.headers.location, saveDir))
        }
        const chunks = []
        const totalBytes = parseInt(res.headers['content-length'], 10); // 获取文件总大小
        let downloadedBytes = 0; // 已下载的字节数

        // 初始化进度条
        const progressBar = new progress('Downloading [:bar] :percent :etas', {
            total: totalBytes,   // 进度条总量
            width: 40,           // 进度条宽度
            complete: '=',       // 已完成部分的符号
            incomplete: ' ',     // 未完成部分的符号
        });
        res.on('data', (chunk) => {
          chunks.push(chunk)
          downloadedBytes += chunk.length;
          progressBar.tick(chunk.length); // 更新进度条
      });
        res.on('end', () => {
          const buffer = Buffer.concat(chunks)
          resolve(buffer)
        });

        res.on('error', async (err) => {
          deleteAllFilesInDirectory(resolve(__dirname,"./ffmpeg"))
          reject(err)
        });

        // res.pipe(unzipper.Extract({ path: saveDir }))

      },
    );
  });
}
function unzip(buffer,output){
  return new Promise((resolve, reject) => {
    const stream = unzipper.Extract({path:output})
    stream.on('close',()=>{
      resolve()
    })
    Readable.from(buffer).pipe(stream)
  })
}
try {
 const buffer = await downloadFileAsync(url, saveDir);
 await unzip(buffer,saveDir)
} catch (error) {
  console.log(error)
}
const ffmpegDir = resolve(__dirname, './ffmpeg');
const dir = readdirSync(resolve(__dirname, './ffmpeg'))
if (dir.length) {
  const current = resolve(ffmpegDir, dir[0]);
  const newPath = resolve(current, `../${platform()}`);
  setTimeout(()=>{
    renameSync(current, newPath);
  })
}
