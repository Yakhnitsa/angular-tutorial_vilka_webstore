import { Component, OnInit } from '@angular/core';
import { Alert } from '../../../core/model/alert.model';
import {AlertService} from '../../../core/services';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {


  constructor(
    private alertService: AlertService
  ) {

  }

  ngOnInit(): void {
  }

  close(alert: Alert): void {
    this.alertService.closeAlert(alert.id);
  }

  get alerts(): Alert[]{
    return this.alertService.getAlerts();
  }

}
