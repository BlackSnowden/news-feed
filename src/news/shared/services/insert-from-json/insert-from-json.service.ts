import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, Country, Language } from 'src/news/entities';
import { Repository } from 'typeorm';
@Injectable()
export class InsertFromJsonService {
  constructor(
    @InjectRepository(Country)
    private countryModel: Repository<Country>,
    @InjectRepository(Category)
    private categoryModel: Repository<Category>,
    @InjectRepository(Language)
    private languageModel: Repository<Language>,
  ) {}

  private modelChoosed: any;

  public async infoNormalization(tableName: string, jsonTemplate: any) {
    return await Promise.all(
      Object.entries(jsonTemplate).map(async ([key, value]) => {
        const normalizationTemplate = await this.normalizarionSwitch(
          tableName,
          key,
          value,
        );
        return normalizationTemplate;
      }),
    );
  }

  private async normalizarionSwitch(tableName: string, key: any, value: any) {
    let normalizedField = {};
    this.modelChoosed = {
      category: () => {
        normalizedField = { categorie: value };
        normalizedField = this.categoryModel.create(normalizedField);
        normalizedField = this.categoryModel.save(normalizedField);
        return normalizedField;
      },
      country: () => {
        normalizedField = {
          country: value,
          country_name: key,
        };
        normalizedField = this.countryModel.create(normalizedField);
        normalizedField = this.countryModel.save(normalizedField);
        return normalizedField;
      },
      language: () => {
        normalizedField = {
          language: value,
          language_name: key,
        };
        normalizedField = this.languageModel.create(normalizedField);
        normalizedField = this.languageModel.save(normalizedField);
        return normalizedField;
      },
    };
    return this.modelChoosed[tableName]();
  }
}
