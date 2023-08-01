import { Inject, Injectable } from '@nestjs/common';
import { TourMemoryEntity } from 'src/config/database/models/tour-memory.entity';
import {
  FindTourMemoryOutboundPortOutputDto,
  InsertTourMemoryOutboundPortInputDto,
  TOUR_MEMORY_REPOSITORY_OUTBOUND_PORT,
  TourMemoryRepositoryOutboundPort,
} from 'src/ports-adapters/tour-memory/tour-memory.repository.outbound-port';

@Injectable()
export class TourMemoryService {
  constructor(
    @Inject(TOUR_MEMORY_REPOSITORY_OUTBOUND_PORT)
    private readonly tourMemoryRepository: TourMemoryRepositoryOutboundPort,
  ) {}

  async recordTourMemory(
    tourInfo: InsertTourMemoryOutboundPortInputDto,
  ): Promise<TourMemoryEntity> {
    const tourMemory = await this.tourMemoryRepository.insertTourMemory(
      tourInfo,
    );

    return tourMemory;
  }

  async readTourMemory(
    userId: number,
  ): Promise<FindTourMemoryOutboundPortOutputDto> {
    const tourMemory = await this.tourMemoryRepository.findTourMemory(userId);

    return tourMemory;
  }
}
