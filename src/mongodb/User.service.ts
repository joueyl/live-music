import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
@Injectable()
export class UserService {
  userContent:Model<User>
  constructor(
    @InjectModel('User') private readonly userDB: Model<User>
  ) {
    this.userContent = userDB
  }
}
