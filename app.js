import Store from "./services/Store.js";

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');

  const updateColumns = () => {
    const width = window.innerWidth;
    if (width <= 424) {
      mainElement.style.setProperty('--columns', '1');
    } else if (width <= 767) {
      mainElement.style.setProperty('--columns', '2');
    } else if (width <= 1023) {
      mainElement.style.setProperty('--columns', '3');
    } else if (width <= 1199) {
      mainElement.style.setProperty('--columns', '4');
    } else {
      mainElement.style.setProperty('--columns', '5');
    }
  };

  updateColumns();
  window.addEventListener('resize', updateColumns);
});

window.app = {};
app.store = Store;
