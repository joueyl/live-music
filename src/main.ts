import { NestFactory } from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express'
import { AppModule } from './app.module';
import {FormTransform} from './interceptors/formTransform'
import {ErrFilter} from './interceptors/errFilter'
import { readFileSync } from 'fs';
import { resolve } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    httpsOptions:{
      cert:readFileSync(resolve(__dirname,"../../certs/fullchain.pem")),
      key:readFileSync(resolve(__dirname,'../../certs/privkey.pem'))
    }
  });
  app.enableCors()
  app.useGlobalFilters(new ErrFilter())
  app.useStaticAssets("client")
  app.useGlobalInterceptors(new FormTransform())
  await app.listen(3000);
}
bootstrap();
