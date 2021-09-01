class Product extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="product"></div>
            `;
    }
}
customElements.define('u-product', Product);

const productBlock = document.querySelector('.product');

const productArr = [
    {
        name: 'Assassin’s Creed:',
        nameSpan: 'Rogue',
        price: '29.99',
        gallery: [
            './assets/img/as_rogue/assassinsCreedRogue1.jpg',
            './assets/img/as_rogue/assassinsCreedRogue2.jpg',
            './assets/img/as_rogue/assassinsCreedRogue3.jpg',
            './assets/img/as_rogue/assassinsCreedRogue4.jpg',
        ],
        description: 'The plot is&nbsp;set in&nbsp;a&nbsp;fictional history of&nbsp;real world events and\n' +
            'follows the centuries-old struggle between the Assassins, who fight for peace with\n' +
            'free will, and the Templars, who desire peace through control. The story is&nbsp;set\n' +
            'in&nbsp;the mid-18th century during the Seven Years&rsquo; War, and follows Shay Patrick\n' +
            'Cormac, an&nbsp;Assassin-turned-Templar who hunts down former members of&nbsp;his\n' +
            'Brotherhood after being betrayed by&nbsp;them. Gameplay in&nbsp;Rogue is&nbsp;very\n' +
            'similar to&nbsp;that of&nbsp;Black Flag with a&nbsp;mixture of&nbsp;ship-based naval\n exploration' +
            'and third-person land-based exploration with some new features.'
    }
]

const productHTML = (el) => {
    return `
                <div class="product__gallery">
                    <div class="product__gallery_main"></div>
                    <div class="product__gallery_thumbnails"></div>
                </div>
                <div class="product__info">
                    <h1 class="product__info_name">${el.name}<br> <span class="product__info_name-span">${el.nameSpan}</span></h1>
                    <p class="product__info_price">&#36; ${el.price}</p>
                    <button class="product__info_buyBtn">buy</button>
                    <p class="product__info_text">${el.description}</p>
                </div>
            `
}

function productSlider(parent, images) {
    let currentImage = 0;
    const slider = {
        parent: parent,
        images: parent.querySelector('.product__gallery_main'),
        thumbnails: parent.querySelector('.product__gallery_thumbnails'),
    }

    slider.images.innerHTML = images.map(function(image) {
        return `<img src="${image}">`
    }).join('');

    const imageNodes = slider.images.querySelectorAll('img');
    imageNodes[currentImage].classList.add('active');

    slider.thumbnails.innerHTML = slider.images.innerHTML;

    const thumbnailNodes = slider.thumbnails.querySelectorAll('img');

    thumbnailNodes[currentImage].classList.add('active');

    for (let i = 0; i < thumbnailNodes.length; i++) {
        thumbnailNodes[i].addEventListener('click', () => {
            slider.thumbnails.querySelector('img.active').classList.remove('active');
            thumbnailNodes[i].classList.add('active');
            imageNodes[currentImage].classList.remove('active');
            currentImage = i;
            imageNodes[i].classList.add('active');
        })
    }
}

productArr.forEach(el => {
    productBlock.insertAdjacentHTML('afterbegin', productHTML(el));
    const parentBlock = document.querySelector('.product__gallery');
    productSlider(parentBlock, productArr[0].gallery);
})







