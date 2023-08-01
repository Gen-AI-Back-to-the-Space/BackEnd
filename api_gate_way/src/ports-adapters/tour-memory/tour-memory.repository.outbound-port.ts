import { TourMemoryEntity } from 'src/config/database/models/tour-memory.entity';

export const TOUR_MEMORY_REPOSITORY_OUTBOUND_PORT =
  'TOUR_MEMORY_REPOSITORY_OUTBOUND_PORT' as const;

export type InsertTourMemoryOutboundPortInputDto = Pick<
  TourMemoryEntity,
  | 'userId'
  | 'address'
  | 'spaceClass'
  | 'spaceName'
  | 'memo'
  | 'travelDate'
  | 'x'
  | 'y'
>;

export type FindTourMemoryOutboundPortOutputDto = {
  tourMemoryList: TourMemoryEntity[];
};

export interface TourMemoryRepositoryOutboundPort {
  insertTourMemory(
    tourInfo: InsertTourMemoryOutboundPortInputDto,
  ): Promise<TourMemoryEntity>;

  findTourMemory(userId: number): Promise<FindTourMemoryOutboundPortOutputDto>;
}
