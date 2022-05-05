import { Test, TestingModule } from '@nestjs/testing';
import { NewsAutomationService } from './news-automation.service';

describe('NewsAutomationService', () => {
  let service: NewsAutomationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsAutomationService],
    }).compile();

    service = module.get<NewsAutomationService>(NewsAutomationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
