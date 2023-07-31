import { Controller } from '@nestjs/common';
import { TourMemoryService } from './tour-memory.service';
import { TypedBody, TypedRoute } from '@nestia/core';
import { RecordTourMemoryInboundPortInputDto } from 'src/dtos/tour-memory/record-tour-memory.dto';
import { InsertTourMemoryOutboundPortInputDto } from 'src/ports-adapters/tour-memory/tour-memory.repository.outbound-port';
import { TourMemoryEntity } from 'src/config/database/models/tour-memory.entity';

@Controller('api/v1/tour-memory')
export class TourMemoryController {
  constructor(private readonly tourMemoryService: TourMemoryService) {}

  @TypedRoute.Post()
  async recordTourMemory(
    @TypedBody() body: RecordTourMemoryInboundPortInputDto,
  ): Promise<TourMemoryEntity> {
    // 유저 id는 1만 일단 사용한다.
    const user = {
      id: 1,
      email: 'test@gmail.com',
      password: '1234',
      name: '김철수',
      nickname: '슈퍼맨',
      createdAt: '2023-07-31T10:04:53.655Z',
      updatedAt: null,
      deletedAt: null,
    };

    const tourInfo: InsertTourMemoryOutboundPortInputDto = {
      ...body,
      userId: user.id,
    };

    const tourMemory = await this.tourMemoryService.readTourMemory(tourInfo);

    return tourMemory;
  }
}
