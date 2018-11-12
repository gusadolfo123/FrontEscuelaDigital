import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStatesService {

  private stateSidebar: boolean = false;

  constructor() { }

  getStateSidebar(): boolean {
    return this.stateSidebar;
  }

  setStateSidebar(state: boolean): void {
    this.stateSidebar = state;
  }


}
