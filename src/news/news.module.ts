import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [
    NewsController,
    // TypeOrmModule.forFeature([]), // inject on the children module
  ],
  providers: [NewsService],
})
export class NewsModule {}
