import {Document} from 'mongoose'

export interface Code extends Document{
    code:string,
    email:string
}