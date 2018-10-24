import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AdService } from '../ad.service';
import { AdModel } from 'src/app/_models/ad.model';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {
  ads: AdModel[];
  constructor(private logger: NGXLogger, private adService: AdService) {
    this.logger.info('AdListComponent');
  }

  ngOnInit() {
    this.getAds();
  }

  getAds(): void {
    this.adService.getAds().subscribe(ads => this.ads = ads);
  }
}
