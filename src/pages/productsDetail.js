import store from "../js/store.js";

const moduleIdentifier = "spa_product_detail";

const getHtml = props => {
  const { activeProduct } = props;
  return `
    <div class="product-detail">
      <h1>Products Details</h1>
      <ul>
        <li>Name:${activeProduct.name}</li>
        <li>Prize:${activeProduct.prize}</li>
      </ul>
      <button onclick="spa_product_detail.goTo('home')">Back To Home</button>
      <button onclick="spa_product_detail.addToCart()">Add To Cart</button>
    </div>
  `;
};

const funcs = {
  goTo: function(page) {
    const appState = store.getState();
    const newState = { ...appState, activePage: page };
    store.setState(newState);
  },
  addToCart: function() {
    const appState = store.getState();
    const { activeProduct } = appState;
    const newState = { ...appState, cart: [...appState.cart, activeProduct] };
    store.setState(newState);
  }
};

export default {
  moduleIdentifier,
  getHtml,
  funcs
};
