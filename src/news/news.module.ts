import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContryController } from './controller/contry/contry.controller';
import { CategoryController } from './controller/category/category.controller';
import { LanguageController } from './controller/language/language.controller';
import { InsertFromJsonService } from 'src/news/shared/services/insert-from-json/insert-from-json.service';
import { Category, Country, Language, New, Source } from './entities/index';
@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Country, Language, New, Source]), // inject on the children module
  ],
  controllers: [
    NewsController,
    ContryController,
    CategoryController,
    LanguageController,
  ],
  providers: [NewsService, InsertFromJsonService],
})
export class NewsModule {}
