// toFixed calculates the total price rounded to 2 decimal and converts to a string
// dicount amount is a % of amount from

export function calculateCartTotal(products, cart, discountAmount = 0) {
  let total = 0;
  for (let id in products) {
    const { price } = products[id];
    const quantity = cart[id] || 0;
    total += price * quantity;
  }
  let totatlWithDiscount = total * (1 - discountAmount);
  return totatlWithDiscount.toFixed(2);
}

export function calculateTotalQuantity(cart) {
  let totalQuantity = 0;
  for (let id in cart) {
    totalQuantity += cart[id];
  }
}
