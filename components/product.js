import store from "../js/store.js";

const render = product => {
  return `
    <div class="product" data-id="${product.id}">
      <h3>${product.name}</h3>
      <span>${product.prize}</span>
      <button class="add">Add to cart</button>
    </div>
  `;
};

const bindEvents = () => {
  const allButtonAdd = document.querySelectorAll(".add");
  if (!allButtonAdd) return;
  allButtonAdd.forEach(btn => {
    btn.onclick = event => {
      const addBtnEl = event.target;
      const productEl = addBtnEl.parentElement;
      const productToAddId = productEl.getAttribute("data-id");
      addToCart(productToAddId);
    };
  });
};

const addToCart = id => {
  const appState = store.getState();
  const { products, shoppingCart } = appState;
  const productById = id => product => product.id === id;
  const productToAdd = products.find(productById(id));
  const sameProductInCart = shoppingCart.find(productById(id));
  const newShoppingCart = [...shoppingCart];
  if (sameProductInCart) {
    sameProductInCart.quantity++;
  } else {
    productToAdd.quantity = 1;
    newShoppingCart.push(productToAdd);
  }
  store.setState({ ...appState, shoppingCart: newShoppingCart });
};

export default {
  render,
  bindEvents
};
