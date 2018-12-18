import nav from '../components/nav.js'

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

const render = (rootEl, props) => {
  const { cart } = props;
  const template = `
    <div class="page home">
      ${nav.render()}
      <div class="content">
        <h2>Cart Info</h2>
        ${cart.length === 0 ? 'no Item selected' : renderCartInfo(cart)}
      </div>
    </div>
  `
  rootEl.innerHTML = template;
};

export default {
  render
};
