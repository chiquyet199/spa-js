import store from './store'

export const navigate = page => {
  const appState = store.getState();
  const newState = { ...appState, activePage: page, history: [...newState.history, page] };
  store.setState(newState);
}

export const goback = () => {
  const appState = store.getState();
  const prevPage = appState.history.pop()
  if (!prevPage) return
  const newState = { ...appState, activePage: prevPage };
  store.setState(newState);
}