import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { LoginParams } from 'src/user/dto/create-user.dto';
@Injectable()
export class UserService {
  userContent: Model<User>;
  constructor(@InjectModel('User') private readonly userDB: Model<User>) {
    this.userContent = userDB;
  }
  addUser(user: Partial<User>) {
    delete (user as any).code;
    const newUser = new this.userDB(user);
    return newUser.save();
  }
  findUser(user:Partial<User>){
   return this.userDB.find({email:user.email})
  }
  login(user:LoginParams){
    return this.userDB.findOne({email:user.email})
  }
}
