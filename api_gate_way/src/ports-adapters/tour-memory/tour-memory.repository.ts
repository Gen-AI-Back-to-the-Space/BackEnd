import { Injectable } from '@nestjs/common';
import {
  FindTourMemoryOutboundPortOutputDto,
  InsertTourMemoryOutboundPortInputDto,
  TourMemoryRepositoryOutboundPort,
} from './tour-memory.repository.outbound-port';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { TourMemoryEntity } from 'src/config/database/models/tour-memory.entity';
import { dateToString } from 'src/utils/functions/date-to-string.function';

@Injectable()
export class TourMemoryRepository implements TourMemoryRepositoryOutboundPort {
  constructor(private readonly prisma: PrismaService) {}
  async insertTourMemory(
    tourInfo: InsertTourMemoryOutboundPortInputDto,
  ): Promise<TourMemoryEntity> {
    const tourMemory = await this.prisma.tourMemory.create({
      data: { ...tourInfo },
    });

    return dateToString(tourMemory);
  }

  async findTourMemory(
    userId: number,
  ): Promise<FindTourMemoryOutboundPortOutputDto> {
    const tourMemory = await this.prisma.tourMemory.findMany({
      where: {
        userId,
      },
    });

    return dateToString({
      tourMemoryList: tourMemory,
    });
  }
}
