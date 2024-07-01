"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingRules = void 0;
const structure_1 = require("../models/structure");
exports.pricingRules = [
    {
        sku: 'atv',
        rule: (items) => {
            var _a, _b;
            const atvItems = items.filter(item => item.sku === 'atv');
            const atvPrice = (_b = (_a = structure_1.products.find(product => product.sku === 'atv')) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 0;
            const discountedItemsCount = Math.floor(atvItems.length / 3) * 2 + atvItems.length % 3;
            return (atvItems.length - discountedItemsCount) * atvPrice;
        }
    },
    {
        sku: 'ipd',
        rule: (items) => {
            var _a, _b;
            const ipdItems = items.filter(item => item.sku === 'ipd');
            const ipdPrice = (_b = (_a = structure_1.products.find(product => product.sku === 'ipd')) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 0;
            const discountPrice = 499.99;
            return ipdItems.length > 4 ? (ipdItems.length * (ipdPrice - discountPrice)) : 0;
        }
    }
];
