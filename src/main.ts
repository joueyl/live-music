import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FormTransform} from './interceptors/formTransform'
import {ErrFilter} from './interceptors/errFilter'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrFilter())
  app.useGlobalInterceptors(new FormTransform())
  await app.listen(3000);
}
bootstrap();
