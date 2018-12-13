let state = {
  history:[],
  activePage: "home",
  products: [
    { id: 1, name: "iphone7", prize: 12 },
    { id: 2, name: "iphone8", prize: 100 },
    { id: 3, name: "iphoneX", prize: 1200 }
  ],
  activeProduct: null,
  cart: []
};

const events = {};

const subcribe = (eventName, callback) => {
  if (!events.hasOwnProperty(eventName)) events[eventName] = [];

  events[eventName].push(callback);
};

const publish = (eventName, data) => {
  if (!events.hasOwnProperty(eventName)) return;
  events[eventName].map(callback => {
    callback(data);
  });
};

const getState = () => state;

const setState = newState => {
  state = newState;
  publish("stateChanged", newState);
};

export default {
  getState,
  setState,
  subcribe
};
