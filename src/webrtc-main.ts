import {NestFactory} from '@nestjs/core'
import {Module} from '@nestjs/common'
import {WebrtcGateway } from './webrtc/webrtc.gateway'
import {WebrtcService} from './webrtc/webwtc.service'
@Module({
providers:[WebrtcGateway,WebrtcService]
})
class Webrtc {}

async function main() {
    const app =await NestFactory.create(Webrtc)
    app.enableCors()
    app.listen(3000)
}

main()