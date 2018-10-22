import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ads } from './ads.data';
import { articles } from './articles.data';
export class Issue {
  position: number;
  description: string;
  serialNumber: string;
  model: string;
  location: string;
  contact: string;
  current: number;
  previous: number;
  pages: number;
  coverage: number;
  printedPages: number;
}
export class Hero {
  id: number;
  name: string;
}
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magenta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    const issues: Issue[] = [
      {
        position: 1,
        serialNumber: 'A-SERIAL-NB',
        location: '',
        model: '',
        contact: '',
        description: 'Cambio tóner negro',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 9982
      },
      {
        position: 2,
        serialNumber: 'B-NM-SERIBL',
        location: '',
        model: '',
        contact: '',
        description: 'Cambio tóner cyan',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 1234
      },
      {
        position: 3,
        serialNumber: 'CCC-OOO-SAB',
        location: '',
        model: '',
        contact: '',
        description: 'Cambio fusor',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 4569874
      },
      {
        position: 4,
        serialNumber: 'A-SERIAL-NB',
        location: '',
        model: '',
        contact: '',
        description: 'Cambio tóner magenta',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 452225
      },
      {
        position: 5,
        serialNumber: 'ASDFREWQLLS',
        location: '',
        model: '',
        contact: '',
        description: 'Cambio tinta negra',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 102
      },
      {
        position: 6,
        serialNumber: '123KLHHGAOS',
        location: '',
        model: '',
        contact: '',
        description: 'Bandeja sin papel',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 65735
      },
      {
        position: 7,
        serialNumber: '4DKS94MCHD9',
        location: '',
        model: '',
        contact: '',
        description: 'Demasiado tiempo sin reportar',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 354912
      },
      {
        position: 8,
        serialNumber: '52CLOSIRNXL',
        location: '',
        model: '',
        contact: '',
        description: 'Tóner bajo',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 111
      },
      {
        position: 9,
        serialNumber: 'A-A-A-A-A-A',
        location: '',
        model: '',
        contact: '',
        description: 'Cambio de IP',
        current: 1,
        previous: 0,
        pages: 12340,
        coverage: 0,
        printedPages: 333
      },
    ];
    return { heroes, issues, ads, articles};
  }
}

