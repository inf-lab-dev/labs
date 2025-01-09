import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createCartController } from '../../service/cart';
import { stockConverter, StockItem } from '../../service/stock';
import { buttonStyles } from '../styles';

@customElement('shop-cart-remove')
export default class ShopCartRemove extends LitElement {
    public static styles = [
        buttonStyles,
        css`
            button {
                background-color: #d0393e;
            }
        `,
    ];

    private readonly cart = createCartController(this);

    @property({ type: Object, converter: stockConverter })
    private accessor item: StockItem | undefined = undefined;

    private onClick() {
        this.cart.service.remove(this.item!);
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
                title="Remove ${this.item.name} from cart"
            >
                <slot></slot>
            </button>
        `;
    }
}
