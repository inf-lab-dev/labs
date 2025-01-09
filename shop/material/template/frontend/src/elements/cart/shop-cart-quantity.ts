import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createCartController } from '../../service/cart';
import { stockConverter, StockItem } from '../../service/stock';

@customElement('shop-cart-quantity')
export default class ShopCartQuantity extends LitElement {
    private readonly cart = createCartController(this);

    @property({ type: Object, converter: stockConverter })
    private accessor item: StockItem | undefined = undefined;

    protected render() {
        if (!this.item) {
            throw new TypeError(
                `Expected ${this.tagName} to contain valid "item" as attribute.`
            );
        }

        return html`
            <span>${this.cart.service.get(this.item)?.quantity ?? '0'}</span>
            <slot></slot>
        `;
    }
}
