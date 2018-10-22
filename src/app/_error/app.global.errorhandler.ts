import {ErrorHandler, Injectable} from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import {ClientErrorService} from './clientError.service';
import { environment } from 'src/environments/environment';

// https://github.com/ralscha/blog/blob/master/ngerrorhandler/client/src/app/app.global.errorhandler.ts

@Injectable()
export class AppGlobalErrorhandler implements ErrorHandler {

  private isRetryRunning = false;

  constructor(private readonly clientErrorService: ClientErrorService) {
    this.sendStoredErrors();
    window.addEventListener('online', () => this.sendStoredErrors());
  }

  async handleError(error) {
    console.error(error);

    const userAgent = {
      language: navigator.language,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      connectionDownlink: navigator['connection'].downlink,
      connectionEffectiveType: navigator['connection'].effectiveType
    };
    const stackTrace = await StackTrace.fromError(error, {offline: true});
    const body = JSON.stringify({ts: Date.now(), userAgent, stackTrace});

    const wasOK = await this.sendError(body);
    if (!wasOK) {
      this.clientErrorService.store(body);
      setTimeout(() => this.sendStoredErrors(), 60_000);
    }

  }

  private async sendStoredErrors() {
    if (this.isRetryRunning) {
      return;
    }

    let attempts = 1;
    const retry = async () => {
      const errors = await this.clientErrorService.getAll();
      if (errors.length === 0) {
        return;
      }

      const wasOK = await this.sendError(errors.map(error => error.error));
      if (wasOK) {
        await this.clientErrorService.delete(errors.map(error => error.id));
        this.isRetryRunning = false;
        return;
      }

      this.isRetryRunning = true;
      if (attempts < 32) {
        attempts = attempts * 2;
      }
      setTimeout(retry, attempts * 60_000);
    };

    await retry();
  }

  private async sendError(errors: string[] | string): Promise<boolean> {
    if (navigator.onLine) {
      try {

        let body;
        if (Array.isArray(errors)) {
          body = `[${errors.join(',')}]`;
        } else {
          body = `[${errors}]`;
        }

        const response = await fetch(`${environment.baseURL}/clientError`, {
          method: 'POST',
          body: body,
          headers: {
            'content-type': 'application/json'
          }
        });
        if (response.ok) {
          return true;
        }
      } catch (error) {
        console.log(error);
      }
    }

    return false;
  }
}
