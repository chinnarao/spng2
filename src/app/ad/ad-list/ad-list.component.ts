import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {

  constructor(private logger: NGXLogger) {
    this.logger.info('AdListComponent');
  }

  ngOnInit() {
  }

}
