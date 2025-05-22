import flags from './model/flags.js';

const mainElement = document.querySelector('main.row');

flags.forEach(flag => {
  const flagCard = `
    <div class="flag col-2 my-2 text-center">
      <div class="flag">
        <img src="${flag.image}" alt="${flag.name}">
        <p class=>${flag.name}</p>
      </div>
    </div>
  `;
  mainElement.insertAdjacentHTML('beforeend', flagCard);
});
