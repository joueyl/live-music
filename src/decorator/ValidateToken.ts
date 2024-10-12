import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
import {JwtService} from '@nestjs/jwt'
import {SessionService} from '../mongodb/Session.service'
@Injectable()
export class Jwt implements CanActivate{
    constructor(private readonly configService:ConfigService,private readonly jwtService:JwtService,private readonly session:SessionService){}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>()
        const token = this.extractTokenFromHeader(request)
        try {
          this.jwtService.verify(token)
          if(! await this.session.getUser('Bearer '+token)) throw new Error('')
        } catch (error) {
          throw new UnauthorizedException('token失效或过期')
        }
        return true
    }
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = (request.headers as any).authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
      }
}