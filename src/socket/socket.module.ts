import {Module} from '@nestjs/common'
import {WebrtcGateway} from './socket.gateway'
import { MongodbModule } from 'src/mongodb/mongodb.module'
// import {JwtModule} from '@nestjs/jwt'
import {JwtModule} from '../jwt/jwt.module'
import {Mediasoup} from './mediasoup.service'
@Module({
    imports:[MongodbModule,JwtModule],
    providers:[WebrtcGateway,Mediasoup]
})
export class SocketModule {}
