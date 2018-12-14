import store from "./store.js";
import {hookBrowserBackButton} from "./navigation.js";
import {getActivePage} from "./utils.js";

const run = () => {
  hookBrowserBackButton()
  const rootEl = document.getElementById('root')
  const appState = store.getState()
  const activePage = getActivePage();
  activePage.render(rootEl, appState)
};

store.subcribe("stateChanged", run);

run();
