import { Module } from '@nestjs/common';
import { TourMemoryController } from './tour-memory.controller';
import { TourMemoryService } from './tour-memory.service';
import { TOUR_MEMORY_REPOSITORY_OUTBOUND_PORT } from 'src/ports-adapters/tour-memory/tour-memory.repository.outbound-port';
import { TourMemoryRepository } from 'src/ports-adapters/tour-memory/tour-memory.repository';
import { PrismaModule } from 'src/config/database/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { S3Client } from '@aws-sdk/client-s3';
import * as multerS3 from 'multer-s3';

import * as path from 'path';
import { Request } from 'express';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): MulterOptions => {
        const s3 = new S3Client({
          region: configService.get('AWS_S3_BUCKET_REGION'),
          credentials: {
            accessKeyId: configService.get('AWS_S3_ACCESS_KEY_ID')!,
            secretAccessKey: configService.get('AWS_S3_SERCRET_ACCESS_KEY')!,
          },
        });

        return {
          storage: multerS3({
            s3,
            bucket: configService.get('AWS_S3_BUCKET_NAME')!,
            key: (req: Request, file, done) => {
              // 파일 확장자 추출
              const ext = path.extname(file.originalname);
              // 베이스 파일 이름
              const basename = path.basename(file.originalname, ext);
              // 최종 파일 이름
              done(null, `${basename}_${new Date().getTime()}.${ext}`);
            },
          }),
        };
      },
    }),
    PrismaModule,
  ],
  controllers: [TourMemoryController],
  providers: [
    {
      provide: TOUR_MEMORY_REPOSITORY_OUTBOUND_PORT,
      useClass: TourMemoryRepository,
    },
    TourMemoryService,
  ],
})
export class TourMemoryModule {}
