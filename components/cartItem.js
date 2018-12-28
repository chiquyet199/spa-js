import store from "../js/store.js";

const render = item => {
  return `
    <li class="product-item" data-id="${item.id}">
      <span>${item.name}</span>
      <span>${item.prize}USD</span>
      <input class="quantity" type="number" value="${item.quantity}"/>
      <button class="del">X</button>
    </li>
  `;
};

const bindEvents = () => {
  bindEventsForQuantityInput();
  bindEventsForDeleteButton();
};

const bindEventsForQuantityInput = () => {
  const quantityEls = document.querySelectorAll(".quantity");
  if (!quantityEls) return;
  quantityEls.forEach(el => {
    const onChangeQuantity = event => {
      const inputEl = event.target;
      const cartItemEl = inputEl.parentElement;
      const id = cartItemEl.getAttribute("data-id");
      const quantity = inputEl.value;
      changeQuantity(id, quantity);
    };
    el.onchange = onChangeQuantity;
    el.onkeyup = onChangeQuantity;
  });
};

const bindEventsForDeleteButton = () => {
  const deleteButtons = document.querySelectorAll(".del");
  if (!deleteButtons) return;
  deleteButtons.forEach(el => {
    el.onclick = event => {
      const buttonEl = event.target;
      const cartItemEl = buttonEl.parentElement;
      const id = cartItemEl.getAttribute("data-id");
      deleteItem(id);
    };
  });
};

const changeQuantity = (productId, quantity) => {
  const appState = store.getState();
  const byId = productId => item => item.id === productId;
  const newShoppingCart = [...appState.shoppingCart];
  const cartItemIdx = newShoppingCart.findIndex(byId(productId));
  newShoppingCart[cartItemIdx] = {
    ...newShoppingCart[cartItemIdx],
    quantity: quantity
  };
  store.setState({ ...appState, shoppingCart: newShoppingCart });
};

const deleteItem = id => {
  const appState = store.getState();
  const { shoppingCart } = appState;
  const withoutDeletedItem = item => item.id !== id;
  const newShoppingCart = shoppingCart.filter(withoutDeletedItem);
  store.setState({ ...appState, shoppingCart: newShoppingCart });
};

export default { render, bindEvents };
