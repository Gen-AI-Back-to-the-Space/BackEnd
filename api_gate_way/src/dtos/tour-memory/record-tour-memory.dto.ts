import { TourMemoryEntity } from 'src/config/database/models/tour-memory.entity';

export type RecordTourMemoryInboundPortInputDto = Pick<
  TourMemoryEntity,
  'spaceClass' | 'spaceName' | 'address' | 'x' | 'y' | 'travelDate' | 'memo'
>;
