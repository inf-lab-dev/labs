import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createCartController } from '../../service/cart';

@customElement('shop-cart-total')
export default class ShopCartTotal extends LitElement {
    private readonly cart = createCartController(this);

    protected render() {
        return html`
            <slot></slot>
            <span> ${this.cart.service.total?.toFixed(2) ?? '?'} </span>
        `;
    }
}
