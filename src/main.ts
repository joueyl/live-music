import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FormTransform} from './interceptors/formTransform'
import {ErrFilter} from './interceptors/errFilter'
import * as  cors from 'cors'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.useGlobalFilters(new ErrFilter())

  app.useGlobalInterceptors(new FormTransform())
  await app.listen(3000);
}
bootstrap();
