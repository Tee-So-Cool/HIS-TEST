import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRecordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.record.create({
      data: dto,
    });
  }

  async findAll(userId?: string) {
    return this.prisma.record.findMany({
      where: userId
        ? {
            userId: Number(userId),
          }
        : undefined,
      include: {
        user: true,
      },
    });
  }
}