import { ComplexAttributeConverter } from 'lit';
import {
    AbstractController,
    createControllerFactory,
} from './abstract/controller';
import { AbstractPersistedService } from './abstract/service';

export interface StockItem {
    name: string;
    icon: string;
    price: number;
}

class StockController extends AbstractController<StockService> {
    protected get updateEventType(): string {
        return 'stock:updated';
    }
}

class StockService extends AbstractPersistedService<StockItem[]> {
    public constructor() {
        super(window.initialStock ?? []);
    }

    public get(name: string): StockItem | null {
        return (
            this.value.find(({ name: itemName }) => itemName === name) ?? null
        );
    }

    public has(name: string) {
        return this.get(name) !== null;
    }

    protected get storageKey(): string {
        return 'stock';
    }

    protected get updateEventType(): string {
        return 'stock:updated';
    }
}

const service = new StockService();

export const stockConverter: ComplexAttributeConverter<StockItem | null> = {
    fromAttribute: name => (name ? service.get(name) : null),
    toAttribute: item => item?.name ?? null,
};

export const createStockController = createControllerFactory(
    service,
    StockController
);
