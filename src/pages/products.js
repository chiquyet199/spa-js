import store from '../js/store.js'
import {$} from '../js/utils.js'
import {goback, navigate} from '../js/navigation.js'
import { get, hosts } from "../js/api.js";

const renderProductItem = product =>
  `<li class="product-item" data-id="${product.id}">${
    product.name
  }</li>`;

const render = (rootEl, props) => {
  const { products } = props;
  funcs.fetchProducts();
  const template = `
    <div class="product">
      <h1>Products List</h1>
      <ul>
        ${products.map(renderProductItem).join("")}
      </ul>
      <button class="btn-back">Back</button>
    </div>
  `;
  rootEl.innerHTML = template;
  const productEl = $('.product')
  productEl.addEventListener('click', function(event){
    const targetElClassNames = event.target.classList
    if(targetElClassNames.contains('product-item')){
      funcs.openProductDetail(event.target.getAttribute('data-id'))
    }else if(targetElClassNames.contains('btn-back')){
      goback()
    }
  })
};

const funcs = {
  openProductDetail: function(id) {
    const appState = store.getState();
    const { products } = appState;
    const activeProduct = products.find(p => p.id == id);
    const newState = {
      ...appState,
      activeProduct: activeProduct
    };
    store.setState(newState);
    navigate('productsDetail')
  },
  fetchProducts: async function() {
    var products = await get(`${hosts.nordic}products`);
    console.log(`This is data from api calling service ${products}`);
  }
};

export default {
  render
};
