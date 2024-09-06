import {Schema} from 'mongoose'
export const  codeSchema = new Schema({
    code:{require:true,type:String},
    email:{require:true,type:String}
}) 