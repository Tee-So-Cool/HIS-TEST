import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Prisma.PrismaPromise<{
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}
