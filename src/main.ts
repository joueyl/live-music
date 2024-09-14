import { NestFactory } from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express'
import { AppModule } from './app.module';
import {FormTransform} from './interceptors/formTransform'
import {ErrFilter} from './interceptors/errFilter'
import { join } from 'node:path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  app.useGlobalFilters(new ErrFilter())
  app.useStaticAssets(join(__dirname, '../client'));
  app.setBaseViewsDir(join(__dirname, '../client'));
  app.useGlobalInterceptors(new FormTransform())
  await app.listen(3000);
}
bootstrap();
