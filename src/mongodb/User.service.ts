import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import {User as UserType} from './interface/user.interface'
@Injectable()
export class UserService {
  userContent:Model<User>
  constructor(
    @InjectModel('User') private readonly userDB: Model<User>
  ) {
    this.userContent = userDB
  }
  addUser(user:Partial<User>){
    const newUser = new this.userDB(user)
    return newUser.save()
  }
}
