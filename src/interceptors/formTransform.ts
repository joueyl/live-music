import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common'
import { Observable,map } from 'rxjs'
@Injectable()
export class FormTransform implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(map(data=>{
            return {
                code:200,
                data
            }
        }))
    }
}