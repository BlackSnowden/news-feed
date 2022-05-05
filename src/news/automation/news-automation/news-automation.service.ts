import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

const SECRET_API_NEWS_DATA = process.env.NEWS_DATA_IO_KEY;

@Injectable()
export class NewsAutomationService {
  constructor(private httpService: HttpService) {}

  params = {
    apikey: SECRET_API_NEWS_DATA,
  };

  //   use lastValueFrom to convert the RxJS Observable into a Promise so that it can be awaited. Straightforward and easy to work with

  @Interval(5000)
  public async healthCheck() {
    const obj = await this.getEndpoint(
      'https://newsdata.io/api/1/news?apikey=pub_68541d13e475cb3356bc22c278c70018e2f3',
    );
    console.log(obj);
  }
  private getEndpoint(url): Promise<any> {
    return lastValueFrom(
      this.httpService.get(url).pipe(
        map((res) => {
          return res.data;
        }),
      ),
    );
  }
}
