import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createCartController } from '../../service/cart';
import { stockConverter, StockItem } from '../../service/stock';

@customElement('shop-cart-add')
export default class ShopCartAdd extends LitElement {
    private readonly cart = createCartController(this);

    @property({ type: Object, converter: stockConverter })
    private accessor item: StockItem | undefined = undefined;

    private onClick() {
        this.cart.service.add(this.item!);
    }

    protected render() {
        if (!this.item) {
            throw new TypeError(
                `Expected ${this.tagName} to contain valid "item" as attribute.`
            );
        }

        return html`
            <button
                @click=${this.onClick}
                title="Add ${this.item.name} to cart"
            >
                <slot></slot>
            </button>
        `;
    }
}
