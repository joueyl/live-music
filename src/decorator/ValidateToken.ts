import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
import {JwtService} from '@nestjs/jwt'
@Injectable()
export class Jwt implements CanActivate{
    constructor(private readonly configService:ConfigService,private readonly jwtService:JwtService){}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>()
        const token = this.extractTokenFromHeader(request)
        try {
          this.jwtService.verify(token)
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