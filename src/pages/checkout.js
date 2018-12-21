import nav from '../components/nav.js'
import store from '../js/store.js'

const render = (rootEl) => {
  const {cart, showCheckout} = store.getState()
  const totalPrize = cart.reduce((total, item) => {
    total = total + (item.prize * item.quantity);
    return total;
  }, 0);
  const emptyCartMessage = `<h2>You've buy nothing, go shopping more :D</h2>`
  const checkoutButton = `<button>Checkout</button>`
  const checkoutItemList = `
    <ul>
      ${cart.map(item => {
    return `<li data-id="${item.id}" class="product-item">
              <span>${item.name}</span>
              <span>${item.prize}USD</span>
              <input type="number" class="quantity" value="${item.quantity}">
              <button class="del">X</button>
            </li>`
      }).join('')}
    </ul>
    <h3>Total: ${totalPrize}USD</h3>
  `
  const checkoutSection = `
    <div class="checkout-section">

    </div>
  `
  const template = `
    <div class="page checkout">
      ${nav.render()}
      <div class="content">
        ${cart.length > 0 ? checkoutItemList : emptyCartMessage}
        ${cart.length > 0 ? checkoutButton : ''}
        ${showCheckout ? checkoutSection : ''}
      </div>
    </div>
  `;
  rootEl.innerHTML = template;
  Array.from(document.querySelectorAll('.del'))
      .map(el => el.onclick = onDeleteItem)
  Array.from(document.querySelectorAll('.quantity'))
      .map(el => {
        el.onchange = onChangeQuantity
        el.onkeyup = onChangeQuantity
      })
};

const onDeleteItem = event => {
  const id = event.target.parentElement.getAttribute('data-id') * 1
  const state = store.getState()
  const withoutDeletedItem = item => item.id !== id
  const newCart = state.cart.filter(withoutDeletedItem)
  store.setState({...state, cart: newCart})
}

const onChangeQuantity = event => {
  const id = event.target.parentElement.getAttribute('data-id') * 1
  const quantity = event.target.value || 1
  const appState = store.getState()
  const targetItem = appState.cart.find(item => item.id === id)
  targetItem.quantity = quantity
  store.setState(appState)
  event.target.value = quantity
}

export default {
  render
};
