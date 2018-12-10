import store from "../js/store.js";

const moduleIdentifier = "spa_home";

const getHtml = props => {
  return `
    <div class="about">
      <h1>ABOUT</h1>
      <button onclick="spa_home.goTo('home')">Back To Home</button>
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
