"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var products_component_1 = require("./products/products.component");
var shopping_cart_component_1 = require("./shopping-cart/shopping-cart.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                products_component_1.ProductsComponent,
                shopping_cart_component_1.ShoppingCartComponent,
                user_profile_component_1.UserProfileComponent
            ],
            exports: [
                products_component_1.ProductsComponent,
                shopping_cart_component_1.ShoppingCartComponent,
                user_profile_component_1.UserProfileComponent
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
