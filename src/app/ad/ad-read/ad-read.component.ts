import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';
import { AdService } from '../ad.service';
import { AdModel } from 'src/app/_models/ad.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ad-read',
  templateUrl: './ad-read.component.html',
  styleUrls: ['./ad-read.component.scss']
})
export class AdReadComponent implements OnInit {

  adId: string;
  adModel: AdModel;
  constructor(private activatedRoute: ActivatedRoute, private logger: NGXLogger, private toastrService: ToastrService, private adService: AdService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.adId = params['id'];
      this.getAdDetails();
    });
  }

  getAdDetails(): void {
    this.adService.getAdDetail(this.adId).subscribe(
        ad => {
            this.adModel = ad;
        },
        (err: HttpErrorResponse) => {
          if (err.error.length === undefined) {
            if (err.statusText === 'Unknown Error' || err.message === 'Http failure response for (unknown url): 0 Unknown Error') {
              this.toastrService.info('Server Down!');
            }
          } else {
            this.toastrService.error('Failed to post advertisement, My apology, Please try again when you get a chance!');
          }
        }
    );
}

}
