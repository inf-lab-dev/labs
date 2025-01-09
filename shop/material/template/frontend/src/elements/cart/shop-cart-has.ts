import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createCartController } from '../../service/cart';
import { stockConverter, StockItem } from '../../service/stock';

@customElement('shop-cart-has')
export default class ShopCartHas extends LitElement {
    private readonly cart = createCartController(this);

    @property({ type: Object, converter: stockConverter })
    private accessor item: StockItem | undefined = undefined;

    protected render() {
        if (!this.item) {
            throw new TypeError(
                `Expected ${this.tagName} to contain valid "item" as attribute.`
            );
        }

        return this.cart.service.has(this.item)
            ? html` <slot></slot> `
            : html`<slot name="else"></slot>`;
    }
}
