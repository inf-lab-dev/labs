import {
    AbstractController,
    createControllerFactory,
} from './abstract/controller';
import { AbstractPersistedService } from './abstract/service';
import { StockItem } from './stock';

export interface CartItem {
    stock: StockItem;
    quantity: number;
}

class CartController extends AbstractController<CartService> {
    protected get updateEventType(): string {
        return 'cart:update';
    }
}

class CartService extends AbstractPersistedService<CartItem[]> {
    public constructor() {
        super([]);
    }

    public get(stock: StockItem): CartItem | null {
        return (
            this.value.find(
                ({ stock: cartStock }) => cartStock.name === stock.name
            ) ?? null
        );
    }

    public has(stock: StockItem) {
        return this.get(stock) !== null;
    }

    public add(stock: StockItem, quantity = 1) {
        const item = this.get(stock);

        if (item === null) {
            this.value = [
                ...this.value,
                {
                    stock,
                    quantity,
                },
            ];
        } else {
            item.quantity += quantity;

            // trigger the update
            this.value = this.value;
        }
    }

    public remove(stock: StockItem, quantity = 1) {
        const item = this.get(stock);

        if (item) {
            item.quantity -= quantity;
        }

        // clear "removed" items (triggers update implicitly)
        this.value = this.value.filter(({ quantity }) => quantity > 0);
    }

    public get total() {
        if (typeof window.calculateTotal === 'function') {
            try {
                const clonedContents = structuredClone(this.value);
                const totalValue = window.calculateTotal(clonedContents);

                if (typeof totalValue !== 'number') {
                    throw new TypeError(
                        `Expected "calculateTotal" to return a number, got "${typeof totalValue}" instead!`
                    );
                }

                return totalValue;
            } catch (error) {
                console.error('Could not calculate total.', error);
            }
        }

        return null;
    }

    protected get storageKey(): string {
        return 'cart';
    }

    protected get updateEventType(): string {
        return 'cart:update';
    }
}

export const createCartController = createControllerFactory(
    new CartService(),
    CartController
);
