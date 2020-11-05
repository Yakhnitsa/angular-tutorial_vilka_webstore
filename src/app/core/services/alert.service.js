"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertService = void 0;
var core_1 = require("@angular/core");
var alert_model_1 = require("../model/alert.model");
var ALERTS = [
    new alert_model_1.Alert(1, 'success', 'This is an success alert'),
    new alert_model_1.Alert(2, 'info', 'This is an info alert'),
    new alert_model_1.Alert(3, 'warning', 'This is a warning alert'),
    new alert_model_1.Alert(4, 'danger', 'This is a danger alert'),
];
var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alerts = ALERTS;
    }
    AlertService.prototype.getAlerts = function () {
        return this.alerts;
    };
    AlertService.prototype.putAlert = function (type, message) {
        this.alerts.push(new alert_model_1.Alert(this.lastId++, type, message));
    };
    AlertService.prototype.closeAlert = function (id) {
        this.alerts.splice(this.alerts.findIndex(function (alert) { return alert.id === id; }), 1);
    };
    AlertService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
