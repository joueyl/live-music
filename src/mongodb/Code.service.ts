import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Code} from './interface/code.interface'
@Injectable()
export class CodeServeice{
    CodeContent:Model<Code>
    constructor(@InjectModel('Code') private readonly CodeDB:Model<Code>){
        this.CodeContent = CodeDB
    }
}