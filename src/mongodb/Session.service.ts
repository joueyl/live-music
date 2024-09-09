import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Session} from './schema/session.shema'
@Injectable()
export class SessionService {
    sessionContent:Model<Session>
    constructor(@InjectModel('Session') private readonly sessionDB:Model<Session>){
        this.sessionContent = sessionDB
    }
   async addToken(token:Partial<Session>){
        const newToken = new this.sessionDB(token)
       await newToken.save()
    }
    async clearOldToken(email:string){
        const newToken =await this.sessionDB.deleteMany({email})
    }
}