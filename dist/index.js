"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_1 = __importDefault(require("./services/checkout"));
const structure_1 = require("./models/structure");
const co = new checkout_1.default();
// Example Scenario 1
co.scan(structure_1.products.find(p => p.sku === 'atv'));
co.scan(structure_1.products.find(p => p.sku === 'atv'));
co.scan(structure_1.products.find(p => p.sku === 'atv'));
co.scan(structure_1.products.find(p => p.sku === 'vga'));
console.log(`Total expected: $249.00, Total calculated: $${co.total().toFixed(2)}`);
// Example Scenario 2
const co2 = new checkout_1.default();
co2.scan(structure_1.products.find(p => p.sku === 'atv'));
co2.scan(structure_1.products.find(p => p.sku === 'ipd'));
co2.scan(structure_1.products.find(p => p.sku === 'ipd'));
co2.scan(structure_1.products.find(p => p.sku === 'atv'));
co2.scan(structure_1.products.find(p => p.sku === 'ipd'));
co2.scan(structure_1.products.find(p => p.sku === 'ipd'));
co2.scan(structure_1.products.find(p => p.sku === 'ipd'));
console.log(`Total expected: $2718.95, Total calculated: $${co2.total().toFixed(2)}`);
