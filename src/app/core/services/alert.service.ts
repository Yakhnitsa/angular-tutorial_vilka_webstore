import { Injectable } from '@angular/core';
import {Alert} from '../model/alert.model';

const ALERTS: Alert[] = [
  new Alert(1, 'success', 'This is an success alert'),
  new Alert(2, 'info', 'This is an info alert'),
  new Alert(3, 'warning', 'This is a warning alert'),
  new Alert(4, 'danger', 'This is a danger alert'),
];

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: Alert[];
  lastId: number;

  constructor() {
    this.alerts = ALERTS;
  }

  public getAlerts(): Alert[]{
    return this.alerts;
  }
  public putAlert(type: string, message: string): void {
    this.alerts.push(new Alert(this.lastId++, type, message));
  }
  public closeAlert(id: number): void{
    this.alerts.splice(this.alerts.findIndex(alert => alert.id === id), 1);
  }
}
