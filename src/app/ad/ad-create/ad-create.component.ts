import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-ad-create',
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.scss']
})
export class AdCreateComponent implements OnInit {

  constructor(private logger: NGXLogger) {
    this.logger.info('AdCreateComponent');
  }

  ngOnInit() {
  }

}
