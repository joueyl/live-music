import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Code} from './schema/code.shema'
@Injectable()
export class CodeServeice{
    CodeContent:Model<Code>
    constructor(@InjectModel('Code') private readonly CodeDB:Model<Code>){
        this.CodeContent = CodeDB
    }
    findUserCode(email:string,code?:string){
        return this.CodeDB.find({email,code}).exec()
    }
    saveCode(user:{email:string,code:string}){
        const newCode = new this.CodeDB({email:user.email,code:user.code})
        return newCode.save()
    }
  async  deleteCode(email:string):Promise<{acknowledged:any,deletedCount:number}>{
       return this.CodeDB.deleteMany({email}).exec()
    }
}