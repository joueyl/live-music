import { Injectable } from '@nestjs/common';
import * as Minio from 'minio';

@Injectable()
export class MinioService {
  private readonly minioClient: Minio.Client;

  constructor() {
    this.minioClient = new Minio.Client({
      endPoint: '192.168.110.175',
      port: 9000,
      useSSL: false,
      accessKey: 'Bv6YFbksoSaeabpVodvs',
      secretKey: 'vHKV0JhEop0JezFzeZHQTnrAGt3F9YhqWIDbSKbA',
    });
  }

  // 获取音频文件流
  async getAudioStream(bucket: string, object: string): Promise<any> {
    try {
      
     const stream = await this.minioClient.getObject(bucket, object);  
     return stream
    } catch (error) {
      console.log(error);
    }
  }
}
 