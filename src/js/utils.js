import store from "./store.js";
import pages from "../pages/index.js";

export const getActivePage = () => {
  const defaultPage = "home";
  const appState = store.getState();
  const activePageName = appState.activePage || defaultPage;
  return pages[activePageName];
};

export const $ = selector => document.querySelector(selector)

export const getPage = pageName => pages[pageName];
