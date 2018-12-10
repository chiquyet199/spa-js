import store from "../js/store.js";

const moduleIdentifier = "spa_home";

const renderCartInfo = cart => {
  const totalPrize = cart.reduce((total, item) => {
    total = total + item.prize;
    return total;
  }, 0);
  return `
    <ul>
      ${cart.map(item => `<li>${item.name} ---- ${item.prize}</li>`)}
    </ul>
    <h3>Total: ${totalPrize}</h3>
  `;
};

const getHtml = props => {
  const { cart } = props;
  return `
    <div class="home">
      <h1>HOME</h1>
      <button onclick="spa_home.goTo('about')">Go To About</button>
      <button onclick="spa_home.goTo('products')">Go To Product list</button>
      <h2>Cart Info</h2>
      ${cart.length === 0 ? "no Item selected" : renderCartInfo(cart)}
      </div>
  `;
};

const funcs = {
  goTo: function(page) {
    const appState = store.getState();
    const newState = { ...appState, activePage: page };
    store.setState(newState);
  }
};

export default {
  moduleIdentifier,
  getHtml,
  funcs
};
