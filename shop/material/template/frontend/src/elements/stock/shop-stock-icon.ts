import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
    createStockController,
    stockConverter,
    StockItem,
} from '../../service/stock';

@customElement('shop-stock-icon')
export default class ShopStockIcon extends LitElement {
    private readonly stock = createStockController(this);

    @property({ type: Object, converter: stockConverter })
    private accessor item: StockItem | undefined = undefined;

    protected render() {
        if (!this.item) {
            throw new TypeError(
                `Expected ${this.tagName} to contain valid "item" as attribute.`
            );
        }

        return html`
            <span>${this.stock.service.get(this.item.name)?.icon ?? ''}</span>
            <slot></slot>
        `;
    }
}
