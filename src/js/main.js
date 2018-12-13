import store from "./store.js";
import utils from "./utils.js";

const run = () => {
  const rootEl = document.getElementById('root')
  const appState = store.getState()
  const activePage = utils.getActivePage();
  activePage.render(rootEl, appState)
};

store.subcribe("stateChanged", run);

run();
