import store from '../js/store.js'
import { navigate } from '../js/navigation.js'


const render = function(){
  document.onclick = function (event) {
    const targetClass = event.target.className
    if (targetClass === 'btn-nav-products') {
      navigate('products')
    } else if (targetClass === 'btn-nav-about') {
      navigate('about')
    } else if (targetClass === 'btn-nav-home') {
      navigate('home')
    } else if (targetClass === 'shopping-cart') {
      navigate('checkout')
    }
  }
  const state = store.getState()
  return `
    <nav>
      <ul>
        <li class="btn-nav-home">Home</li>
        <li class="btn-nav-products">Products</li>
        <li class="btn-nav-about">About</li>
      </ul>
      <span class="shopping-cart">Cart(${state.cart.length})</span>
    </nav>
  `
}

export default {
  render
}