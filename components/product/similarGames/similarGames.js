class SimilarGames extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class='similarGames'>
                    <h1 class="similarGames__header">Similar games</h1>
                    <div class="similarGames__block"></div>
                </div>
            `;
    }
}

customElements.define('u-similar-games', SimilarGames);

const similarGamesBlock = document.querySelector('.similarGames__block');
const similarGames = [
    {
      name: 'MIDDLE-EARTH:<br>Shadow Of War',
      img: './assets/img/similarGames/middleearthSoW.jpg',
    },
    {
      name: 'DISHONORED 2',
      img: './assets/img/similarGames/dishonored2.jpg',
    },
    {
      name: 'THIEF',
      img: './assets/img/similarGames/thief.jpg',
    },
    {
      name: 'HITMAN',
      img: './assets/img/similarGames/hitman.jpg',
    },
]

const renderSimilarGames = el => {
    return `
                <div class="similarGames__block_element">
                    <img src="${el.img}" alt="#" class="similarGames__block_element_img">
                    <p class="similarGames__block_element_name">${el.name}</p>
                    <a href='./product.html' target="_blank" class="similarGames__block_element_btn">buy</a>
                </div>
            `
}

similarGames.forEach(el => {
    similarGamesBlock.insertAdjacentHTML('beforeend', renderSimilarGames(el));
})

