import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-read',
  templateUrl: './ad-read.component.html',
  styleUrls: ['./ad-read.component.scss']
})
export class AdReadComponent implements OnInit {

  adId: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.adId = this.activatedRoute.snapshot.params['id'];
  }

}
