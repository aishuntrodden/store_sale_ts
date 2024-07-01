import Checkout from './services/checkout';
import { products } from './models/structure';

const co = new Checkout();

// Example Scenario 1
co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'vga')!);
console.log(`Total expected: $249.00, Total calculated: $${co.total().toFixed(2)}`);

// Example Scenario 2
const co2 = new Checkout();

co2.scan(products.find(p => p.sku === 'atv')!);
co2.scan(products.find(p => p.sku === 'ipd')!);
co2.scan(products.find(p => p.sku === 'ipd')!);
co2.scan(products.find(p => p.sku === 'atv')!);
co2.scan(products.find(p => p.sku === 'ipd')!);
co2.scan(products.find(p => p.sku === 'ipd')!);
co2.scan(products.find(p => p.sku === 'ipd')!);
console.log(`Total expected: $2718.95, Total calculated: $${co2.total().toFixed(2)}`);
