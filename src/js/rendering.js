import store from "./store.js";

const render = page => {
  const appState = store.getState();
  const rootEl = document.getElementById("root");
  rootEl.innerHTML = page.getHtml(appState);
};

export default { render };
