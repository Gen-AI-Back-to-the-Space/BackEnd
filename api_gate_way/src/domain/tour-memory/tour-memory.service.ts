import { Inject, Injectable } from '@nestjs/common';
import { TourMemoryEntity } from 'src/config/database/models/tour-memory.entity';
import {
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

  async readTourMemory(
    tourInfo: InsertTourMemoryOutboundPortInputDto,
  ): Promise<TourMemoryEntity> {
    const tourMemory = await this.tourMemoryRepository.insertTourMemory(
      tourInfo,
    );

    return tourMemory;
  }
}
