"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logic_1 = require("../logic/logic");
class Checkout {
    constructor() {
        this.items = [];
    }
    scan(item) {
        this.items.push(item);
    }
    total() {
        let total = this.items.reduce((sum, item) => sum + item.price, 0);
        for (const rule of logic_1.pricingRules) {
            total -= rule.rule(this.items);
        }
        return total;
    }
}
exports.default = Checkout;
