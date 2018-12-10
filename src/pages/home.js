import store from "../js/store.js";

const moduleIdentifier = "spa_home";

const getHtml = props => {
  return `
    <div class="home">
      <h1>HOME</h1>
      <button onclick="spa_home.goTo('about')">Go To About</button>
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
