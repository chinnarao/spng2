import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Hero } from 'src/app/_in-memory/in-memory-data.service';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {

  heroes: Hero[];
  constructor(private logger: NGXLogger, private adService: AdService) {
    this.logger.info('AdListComponent');
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.adService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
