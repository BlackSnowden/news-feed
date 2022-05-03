import { Body, Controller, Get, Post } from '@nestjs/common';
import * as Countries from '../../shared/templates/country.list.json';
import { InsertFromJsonService } from 'src/news/shared/services/insert-from-json/insert-from-json.service';
import { Country } from 'src/news/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('contry')
export class ContryController {
  constructor(
    private insertFromJsonService: InsertFromJsonService,
    @InjectRepository(Country)
    private countryModel: Repository<Country>,
  ) {}

  @Post()
  async createCountry() {
    return 'ja foi feito';
    const normalizedCountries =
      await this.insertFromJsonService.infoNormalization('country', Countries);
  }
}
