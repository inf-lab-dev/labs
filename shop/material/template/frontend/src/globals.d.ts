declare interface Window {
    initialStock: undefined | import('./service/stock').StockItem[];
    serverState: undefined | string;

    calculateTotal:
        | undefined
        | ((items: import('./service/cart').CartItem[]) => number);
}
