import { Injectable } from '@nestjs/common';
import {JwtService as Service} from '@nestjs/jwt'
@Injectable()
export class JwtService {
    constructor(private readonly service:Service){}
    async login(user:any){
       return this.service.sign(user)
    }
}
