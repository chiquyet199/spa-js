let state = {
  history: ['home'],
  activePage: 'home',
  products: [
    {
      id: 1,
      name: 'iphone6',
      prize: 550,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-200x200.jpg',
    },
    {
      id: 2,
      name: 'iphone6 Plus',
      prize: 600,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-200x200.jpg',
    },
    {
      id: 3,
      name: 'iphone7',
      prize: 650,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-hh-200x200.jpg',
    },
    {
      id: 4,
      name: 'iphone7 Plus',
      prize: 700,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-hh-200x200.jpg',
    },
    {
      id: 5,
      name: 'iphone8',
      prize: 750,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-200x200.jpg',
    },
    {
      id: 6,
      name: 'iphone8 Plus',
      prize: 800,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-200x200.jpg',
    },
    {
      id: 7,
      name: 'iphoneX',
      prize: 900,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-200x200.jpg',
    },
    {
      id: 8,
      name: 'iphoneXS',
      prize: 1200,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-200x200.jpg',
    },
  ],
  activeProduct: null,
  cart: [],
}

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
  console.log(newState);
  publish("stateChanged", newState);
};

export default {
  getState,
  setState,
  subcribe
};
