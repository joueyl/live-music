import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch()
export class ErrFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    let status = 500;
    if ('getStatus' in exception) {
      status = exception.getStatus();
    }
    response.status(status).json({
      code: status,
      time: new Date(),
      message: exception.message,
      path: request.url,
    });
  }
}

