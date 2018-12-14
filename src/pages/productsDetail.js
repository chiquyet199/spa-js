import store from '../js/store.js'
import {$} from '../js/utils.js'
import {navigate} from '../js/navigation.js'

const render = (rootEl, props) => {
  const { activeProduct } = props;
  const template = activeProduct ? `
    <div class="product-detail">
      <h1>Products Details</h1>
      <ul>
        <li>Name:${activeProduct.name}</li>
        <li>Prize:${activeProduct.prize}</li>
      </ul>
      <button class="btn-back">Back To Home</button>
      <button class="add-to-cart">Add To Cart</button>
    </div>
  ` : '<h1>No such a product</h1>'
  rootEl.innerHTML = template;
  const productEl = $('.product-detail')
  productEl.addEventListener('click', function (event) {
    const targetElClassNames = event.target.classList
    if (targetElClassNames.contains('add-to-cart')) {
      funcs.addToCart()
    } else if (targetElClassNames.contains('btn-back')) {
      navigate('home')
    }
  })
};

const funcs = {
  addToCart: function() {
    const appState = store.getState();
    const { activeProduct } = appState;
    const newState = { ...appState, cart: [...appState.cart, activeProduct] };
    store.setState(newState);
  }
};

export default {
  render
};
