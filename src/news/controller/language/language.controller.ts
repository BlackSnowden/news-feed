import { Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/news/entities';
import { InsertFromJsonService } from 'src/news/shared/services/insert-from-json/insert-from-json.service';
import { Repository } from 'typeorm';
import * as Languages from '../../shared/templates/language.list.json';
@Controller('language')
export class LanguageController {
  constructor(
    private insertFromJsonService: InsertFromJsonService,
    @InjectRepository(Language)
    private languageModel: Repository<Language>,
  ) {}

  @Post()
  async createCountry() {
    return 'ja foi feito';
    const normalizedCountries =
      await this.insertFromJsonService.infoNormalization('language', Languages);
  }
}
