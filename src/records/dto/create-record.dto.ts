import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateRecordDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsInt()
    @Min(1)
    amount: number;

    @IsInt()
    userId: number;
}
