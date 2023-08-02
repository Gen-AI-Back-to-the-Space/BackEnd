import { Controller } from '@nestjs/common';
import { TourMemoryService } from './tour-memory.service';
import { TypedBody, TypedRoute } from '@nestia/core';
import { RecordTourMemoryInboundPortInputDto } from 'src/dtos/tour-memory/record-tour-memory.dto';
import {
  FindTourMemoryOutboundPortOutputDto,
  InsertTourMemoryOutboundPortInputDto,
} from 'src/ports-adapters/tour-memory/tour-memory.repository.outbound-port';
import { TourMemoryEntity } from 'src/config/database/models/tour-memory.entity';
import {
  GetAnswerFromChatGpt,
  GetTourMemoryUsingChatGPTBodyDto,
} from 'src/dtos/tour-memory/get-tour-memory.dto';

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

    const tourMemory = await this.tourMemoryService.recordTourMemory(tourInfo);

    return tourMemory;
  }

  @TypedRoute.Post('ai-search')
  async getTourMemoryUsingChatGPT(
    @TypedBody() body: GetTourMemoryUsingChatGPTBodyDto,
  ): Promise<GetAnswerFromChatGpt> {
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

    const answer = await this.tourMemoryService.searchTourMemoryUsingChatGPT(
      user.id,
      body.query,
    );

    return answer;
  }

  // 아... 나중에 페이지네이션 구현해야함
  @TypedRoute.Get()
  async readTourMemory(): Promise<FindTourMemoryOutboundPortOutputDto> {
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

    const tourMemoryList = await this.tourMemoryService.readTourMemory(user.id);

    return tourMemoryList;
  }
}
