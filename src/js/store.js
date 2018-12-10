const initialState = {
  activePage: "home",
  products: [
    {
      id: 1,
      name: "iphone",
      prize: 12
    },
    {
      id: 2,
      name: "android",
      prize: 10
    }
  ]
};

const appState = initialState;

const getState = () => appState;

const initialize = () => {
  //load data from localstorage
  console.log("init store");
};

export default {
  getState,
  initialize
};
