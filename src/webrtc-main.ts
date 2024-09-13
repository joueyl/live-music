import { NestFactory } from '@nestjs/core';
import { Module,Controller,Get, Render,Logger } from '@nestjs/common';
import { WebrtcGateway } from './webrtc/webrtc.gateway';
import { WebrtcService } from './webrtc/webwtc.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
@Controller()
class GlobController{
    @Get()
    @Render('index.html')
    root(){
        return {}
    }
}
@Module({
  controllers: [
    GlobController
  ],
  providers: [WebrtcGateway, WebrtcService],
})
class Webrtc {}

async function main() {
  const app = await NestFactory.create<NestExpressApplication>(Webrtc);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '../client'));
  app.setBaseViewsDir(join(__dirname, '../client'));
  app.listen(3000,()=>{
    const log = new Logger()
    log.log('服务已开启:http://localhost:3000')
  });
}
main();
