import { Product } from '../models/structure';
import { pricingRules } from '../logic/logic'

class Checkout {
  private items: Product[] = [];

  scan(item: Product): void {
    this.items.push(item);
  }

  total(): number {
    let total = this.items.reduce((sum, item) => sum + item.price, 0);

    for (const rule of pricingRules) {
      total -= rule.rule(this.items);
    }

    return total;
  }
}

export default Checkout;
