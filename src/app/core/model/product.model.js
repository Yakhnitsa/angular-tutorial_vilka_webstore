"use strict";
exports.__esModule = true;
exports.ProductType = exports.Nutrient = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var Nutrient = /** @class */ (function () {
    function Nutrient(type, quantity) {
        this.type = type;
        this.quantity = quantity;
    }
    return Nutrient;
}());
exports.Nutrient = Nutrient;
var ProductType;
(function (ProductType) {
    ProductType[ProductType["MEAT"] = 0] = "MEAT";
    ProductType[ProductType["FISH"] = 1] = "FISH";
    ProductType[ProductType["POULTRY"] = 2] = "POULTRY";
    ProductType[ProductType["CEREALS"] = 3] = "CEREALS";
    ProductType[ProductType["PASTA"] = 4] = "PASTA";
    ProductType[ProductType["FRUITS"] = 5] = "FRUITS";
    ProductType[ProductType["VEGETABLES"] = 6] = "VEGETABLES";
    ProductType[ProductType["BEANS"] = 7] = "BEANS";
    ProductType[ProductType["NUTS"] = 8] = "NUTS";
    ProductType[ProductType["MILK"] = 9] = "MILK";
    ProductType[ProductType["EGGS"] = 10] = "EGGS";
    ProductType[ProductType["SPICES"] = 11] = "SPICES";
    ProductType[ProductType["SUPPLEMENTS"] = 12] = "SUPPLEMENTS";
    ProductType[ProductType["WATER"] = 13] = "WATER";
    ProductType[ProductType["OTHER"] = 14] = "OTHER";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
