import https from 'https';
import fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
const url =
  'https://www.gyan.dev/ffmpeg/builds/packages/ffmpeg-2024-09-12-git-504c1ffcd8-essentials_build.7z';
const __dirname = dirname(fileURLToPath(import.meta.url));

const saveDir = resolve(__dirname, './ffmpeg/ffmpeg.7z');
// const fileStream = fs.createWriteStream(saveDir);
function downloadFileAsync(uri, dest) {
  return new Promise((resolve, reject) => {
    // 确保dest路径存在
    const file = fs.createWriteStream(dest);

    https.get(uri, (res) => {
      if (res.statusCode !== 200) {
        reject(response.statusCode);
        return;
      }

      res.on('end', () => {
        console.log('download end');
      });

      // 进度、超时等

      file
        .on('finish', () => {
          console.log('finish write file');
          file.close(resolve);
        })
        .on('error', (err) => {
          fs.unlink(dest);
          reject(err.message);
        });

      res.pipe(file);
    });
  });
}
downloadFileAsync(url,saveDir)