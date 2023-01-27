import { Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploaderController } from './uploader.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadedFile } from './entities/uploader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UploadedFile])],
  controllers: [UploaderController],
  providers: [UploaderService],
})
export class UploaderModule {}
