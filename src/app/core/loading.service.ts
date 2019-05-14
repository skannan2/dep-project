import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  loader = false;
  constructor() { }

  setLoading(val){
    this.loader = val;

  }

  getLoading() {
    return this.loader;
  }

}