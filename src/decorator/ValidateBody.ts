import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
export const ValidataBody = <T extends object>(DTO:new ()=>T) =>
  createParamDecorator(async (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const object = plainToClass(DTO,request.body)
    const error =await validate(object)
    if(error.length){
        throw new BadRequestException('Validation failed: ' + JSON.stringify(error));
    }
    return object as T
  })();
