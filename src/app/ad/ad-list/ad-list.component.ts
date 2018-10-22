import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AdService } from 'src/app/_api/ad.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from 'src/app/_in-memory/in-memory-data.service';

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
    //console.log('444444444444444444');
    //console.log(environment.production);
    //this.adService.getAll();
    // .pipe(
    //   tap(data => {
    //       console.log("111111111111111111111111111111");
    //       console.log(JSON.stringify(data));
    //       console.log("222222222222222222222222222222");
    //     }),
    //   catchError(this.handleError)
    // );
    //this.adService.getAll().subscribe
    //console.log('5555555555555555555');
    this.getHeroes();
  }

  getHeroes(): void {
    this.adService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
