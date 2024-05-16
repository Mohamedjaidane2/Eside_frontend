import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PreviousUrlService {
  private previousUrl: string | undefined;
  private previousPreviousUrl: string | undefined;

  constructor(private location: Location) {
    this.location.onUrlChange(url => {
      this.previousPreviousUrl = this.previousUrl;
      this.previousUrl = url;
    });
  }

  getPreviousUrl(): string | undefined {
    return this.previousUrl;
  }

  getPreviousUrlBeforePrevious(): string | undefined {
    return this.previousPreviousUrl;
  }
}
