import store from "./store.js";
import pages from "../pages/index.js";

const getActivePage = () => {
  const defaultPage = "home";
  const appState = store.getState();
  const activePageName = appState.activePage || defaultPage;
  return pages[activePageName];
};

const getPage = pageName => pages[pageName];

export default { getActivePage, getPage };
