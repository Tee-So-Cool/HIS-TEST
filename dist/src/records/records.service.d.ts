import { PrismaService } from '../../prisma/prisma.service';
import { CreateRecordDto } from './dto/create-record.dto';
export declare class RecordsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateRecordDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        amount: number;
        userId: number;
    }>;
    findAll(userId?: string): Promise<({
        user: {
            email: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        amount: number;
        userId: number;
    })[]>;
}
