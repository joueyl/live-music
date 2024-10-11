import { Injectable } from '@nestjs/common';
import { Client } from 'minio';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class MinioService {
  client: Client;
  constructor(private readonly config: ConfigService) {
    this.client = new Client({
      endPoint: config.get('ENDPOINT'),
      port: parseInt(config.get('PORT')),
      useSSL: false,
      accessKey: config.get('ACCESS_KEY'),
      secretKey: config.get('SECRET_KEY'),
    });
    
  }
}
