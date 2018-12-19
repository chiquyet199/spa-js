import nav from '../components/nav.js'
import store from '../js/store.js'

const render = (rootEl) => {
  const cart = store.getState().cart
  const totalPrize = cart.reduce((total, item) => {
    total = total + item.prize;
    return total;
  }, 0);
  const template = `
    ${nav.render()}
    <div stlye="padding:20px">
      <ul>
        ${cart.map(item => `<li class="product-item">${item.name} ---- ${item.prize}</li>`).join('')}
      </ul>
      <h3>Total: ${totalPrize}</h3>
      <button>Checkout</button>
    </div>
  `;
  rootEl.innerHTML = template;
};

export default {
  render
};
