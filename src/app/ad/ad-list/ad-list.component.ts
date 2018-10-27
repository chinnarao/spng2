import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AdService } from '../ad.service';
import { AdModel } from 'src/app/_models/ad.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {
  ads: AdModel[];
  constructor(private logger: NGXLogger, private adService: AdService, private http1: HttpClient) {
    this.logger.info('AdListComponent');
  }

  ngOnInit() {
    // this.getAds();
    this.testLog();
  }

  getAds(): void {
    // this.adService.getAds().subscribe(ads => { this.ads = ads; }, error => { console.log('rrrrrrrrrrrrrrr'); });
    this.adService.getAds().subscribe(ads => { this.ads = ads; }, error => { console.log('rrrrrrrrrrrrrrr'); });
  }

  // tslint:disable-next-line:member-ordering
  books = [
    { id: 1, name: 'Core Java' },
    { id: 2, name: 'Angular 2' },
    { id: 3, name: 'Hibernate' }
  ];

  testLog() {
    // return this.http1.post('https://localhost:44324/api/log', 'error string by china angular project')
    //               .toPromise()
    //               .then((data) => {
    //                 console.log(data);
    //               });
    // { id: 1, name: 'bar' }
    // 'Content-Type':  'application/x-www-form-urlencoded'
    // 'Content-Type':  'application/json'
    // JSON.stringify({ id: 1, name: 'bar' })   // success

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http1.post('https://localhost:44324/api/log/log1', JSON.stringify('this is test data'), httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}
