import { Component } from '@angular/core';
import { AngularWaitBarrier } from '../../../node_modules/blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-pane',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    if (!this.data.length) {
      this.isTransaction = true;
    }
    if (localStorage.getItem('twopane')) {
      this.data = JSON.parse(localStorage.getItem('twopane'));
    }
    this.splitObjects();
  }

  private data: any[] = [
    // {
    //   'name': 'John Doe',
    //   'login': 'John'
    // },
    // {
    //   'name': 'John Doe1',
    //   'login': 'John1'
    // },
    // {
    //   'name': 'John Doe2',
    //   'login': 'John2'
    // },
    // {
    //   'name': 'John Doe3',
    //   'login': 'John3'
    // },
    // {
    //   'name': 'John Doe4',
    //   'login': 'John4'
    // },
    // {
    //   'name': 'John Doe5',
    //   'login': 'John5'
    // }
  ];
  private displayData: any[] = [];
  private hiddenData: any[] = [];
  private selectedItem: any;
  private addItem: any = {
    name: '',
    login: ''
  };
  private isTransaction: any = false;
  private showDD: any = false;

  private splitObjects() {
    let oldDataCopy = this.data;
    if (localStorage.getItem('twopane')) {
      oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
    }
    this.displayData = this.data.splice(0, 3);
    this.hiddenData = this.data;
  }

  private selectItem(item: any, isselectedFromDD: boolean) {
    this.isTransaction = false;
    this.addItem = {
      name: '',
      login: ''
    };
    this.selectedItem = item;
    if (isselectedFromDD) {
      let oldDataCopy = this.data;
      if (localStorage.getItem('twopane')) {
        oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
      }
      const resuffleIndex = oldDataCopy.findIndex((val) => val.name === item.name);
      const spliced = oldDataCopy.splice(0, resuffleIndex);
      this.data = [item, ...spliced, ...oldDataCopy.slice(1)];
      localStorage.setItem('twopane', JSON.stringify(this.data));
      this.displayData = this.data.splice(0, 3);
      this.hiddenData = this.data;
    }
  }

  private addItemFn() {
    if (this.validateNewObj()) {
      const newCopy = JSON.parse(JSON.stringify(this.addItem));
      let oldDataCopy: any = {};
      if (localStorage.getItem('twopane')) {
        oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
      } else {
        oldDataCopy = JSON.parse(JSON.stringify(this.data));
      }
      this.data = [newCopy, ...oldDataCopy];
      localStorage.setItem('twopane', JSON.stringify(this.data));
      this.splitObjects();
    }
  }

  private validateNewObj() {
    if (!this.addItem.name || this.addItem.name.trim().length < 1) {
      alert('Enter a valid name');
      return false;
    } else if (!this.addItem.login || this.addItem.login.trim().length < 1) {
      alert('Enter a valid login');
      return false;
    }
    return true;
  }
  private removeItem(i: number) {
    let oldDataCopy: any = {};
    if (localStorage.getItem('twopane')) {
      oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
    } else {
      oldDataCopy = JSON.parse(JSON.stringify(this.data));
    }
    oldDataCopy.splice(i, 1);
    this.displayData = oldDataCopy.splice(0, 3);
    this.hiddenData = oldDataCopy;
    localStorage.setItem('twopane', JSON.stringify([...this.displayData, ...this.hiddenData]));
  }

  private showAddTransaction() {
    this.isTransaction = true;
  }

  private getTranClass() {
    return (this.isTransaction) ? 'addTr header selected' : 'addTr header';
  }

  private getClass(item: any) {
    return (item === this.selectedItem) ? 'header selected' : 'header';
  }

  private showDDFn(event) {
    this.showDD = true;
  }

  private hideDDFn() {
    this.showDD = false;
  }
}
