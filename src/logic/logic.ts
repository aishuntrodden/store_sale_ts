import { Product, products } from '../models/structure';

interface PricingRule {
  sku: string;
  rule: (items: Product[]) => number;
}

export const pricingRules: PricingRule[] = [
  {
    sku: 'atv',
    rule: (items: Product[]): number => {
      const atvItems = items.filter(item => item.sku === 'atv');
      const atvPrice = products.find(product => product.sku === 'atv')?.price ?? 0;
      const discountedItemsCount = Math.floor(atvItems.length / 3) * 2 + atvItems.length % 3;
      return (atvItems.length - discountedItemsCount) * atvPrice;
    }
  },
  {
    sku: 'ipd',
    rule: (items: Product[]): number => {
      const ipdItems = items.filter(item => item.sku === 'ipd');
      const ipdPrice = products.find(product => product.sku === 'ipd')?.price ?? 0;
      const discountPrice = 499.99;
      return ipdItems.length > 4 ? (ipdItems.length * (ipdPrice - discountPrice)) : 0;
    }
  }
];
