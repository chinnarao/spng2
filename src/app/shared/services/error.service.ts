import {ErrorHandler, Injectable, Injector} from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class ErrorService implements ErrorHandler {
  constructor(private injector: Injector, private logger: NGXLogger) {}
  handleError(error) {
    // your custom error handling logic
    this.logger.error(error);
  }
}
