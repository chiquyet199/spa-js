import store from "./store.js";
import pages from "../pages/index.js";

const renderPage = () => {
  const rootEl = document.getElementById("root");
  const state = store.getState();
  const { activePage } = state;

  pages[activePage].render(rootEl);
};

renderPage();

store.subcribe("stateChanged", renderPage);
