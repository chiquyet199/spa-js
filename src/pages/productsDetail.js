const render = (rootEl, props) => {
  const { activeProduct } = props;
  const template = activeProduct ? `
    <div class="product-detail">
      <h1>Products Details</h1>
      <ul>
        <li>Name:${activeProduct.name}</li>
        <li>Prize:${activeProduct.prize}</li>
      </ul>
      <button onclick="spa_product_detail.goTo('home')">Back To Home</button>
      <button onclick="spa_product_detail.addToCart()">Add To Cart</button>
    </div>
  ` : '<h1>No such a product</h1>';
  rootEl.innerHTML = template;
};

// const funcs = {
//   goTo: function(page) {
//     const appState = store.getState();
//     const newState = { ...appState, activePage: page };
//     store.setState(newState);
//   },
//   addToCart: function() {
//     const appState = store.getState();
//     const { activeProduct } = appState;
//     const newState = { ...appState, cart: [...appState.cart, activeProduct] };
//     store.setState(newState);
//   }
// };

export default {
  render
};
