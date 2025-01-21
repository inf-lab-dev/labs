import './elements/cart/shop-cart-add';
import './elements/cart/shop-cart-remove';
import './elements/cart/shop-cart-has';
import './elements/cart/shop-cart-quantity';
import './elements/cart/shop-cart-total';

import './elements/stock/shop-stock-price';
import './elements/stock/shop-stock-icon';

// Auto-Reload the page upon changes
const eventSource = new EventSource('/__watch');
eventSource.addEventListener('message', () => location.reload());
