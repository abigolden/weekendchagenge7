const Store = {
  kitties: [
    // Datos de los gatitos
  ],
  selectedKitty: null,
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property === "selectedKitty") {
      if (value) {
        window.dispatchEvent(new Event("kitty-selected"));
      } else {
        window.dispatchEvent(new Event("kitty-clear"));
      }
    }
    return true;
  },
  get(target, property) {
    return target[property];
  },
});

export default proxiedStore;
