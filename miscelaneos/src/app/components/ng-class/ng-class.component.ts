import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent {

  alert: string = 'alert-danger';

  loading: boolean = false;

  danger: boolean

  constructor() { 
    this.danger = true;
  }

  execute() {
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);
  }
}
