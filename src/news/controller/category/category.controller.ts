import { Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/news/entities';
import * as Categories from '../../shared/templates/category.list.json';
import { InsertFromJsonService } from 'src/news/shared/services/insert-from-json/insert-from-json.service';
import { Repository } from 'typeorm';

@Controller('category')
export class CategoryController {
  constructor(
    private insertFromJsonService: InsertFromJsonService,
    @InjectRepository(Category)
    private categoryModel: Repository<Category>,
  ) {}

  @Post()
  async createCountry() {
    return 'ja foi feito';
    const normalizedCountries =
      await this.insertFromJsonService.infoNormalization(
        'category',
        Categories,
      );
  }
}
