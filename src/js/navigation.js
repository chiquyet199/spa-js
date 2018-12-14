import store from "./store.js";

let listener = null

export const navigate = page => {
  const appState = store.getState();
  const newState = {
    ...appState,
    activePage: page,
    history: [...appState.history, page]
  };
  store.setState(newState);
};

export const goback = () => {
  const appState = store.getState();
  appState.history.length > 1 && appState.history.pop()
  const prevPage = appState.history[appState.history.length - 1]
  if (!prevPage) return;
  const newState = { ...appState, activePage: prevPage };
  store.setState(newState);
};

export function hookBrowserBackButton() {
  if (listener) {
    unhook()
  }
  listener = event => {
    console.log('on popstate')
    goback()
  }
  window.addEventListener('popstate', listener)
}

export function unhook() {
  window.removeEventListener('popstate', listener)
  listener = null
}