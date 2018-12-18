import nav from '../components/nav.js'
import store from '../js/store.js'
import {$} from '../js/utils.js'

const render = (rootEl, props) => {
  const { activeProduct } = props;
  const template = `
    <div class="product-detail">
      ${nav.render()}
      <div class="content">
        <h1>Products Details</h1>
        <ul>
          <li>Name:${activeProduct.name}</li>
          <li>Prize:${activeProduct.prize}</li>
        </ul>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `
  rootEl.innerHTML = template;
  const productEl = $('.product-detail')
  productEl.addEventListener('click', function (event) {
    const targetElClassNames = event.target.classList
    if (targetElClassNames.contains('add-to-cart')) {
      funcs.addToCart()
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
