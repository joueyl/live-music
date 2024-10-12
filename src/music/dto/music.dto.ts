import {IsString} from 'class-validator'
export class SPD{
    @IsString()
    readonly spd:string
}
export class Play{
    @IsString()
    name:string
}