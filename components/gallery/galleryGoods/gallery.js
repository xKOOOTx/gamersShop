class Gallery extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="gallery">
                    <h1 class="gallery__header">
                        our gallery
                    </h1>
                    <div class="gallery__list"></div>
                    <button class="gallery__list_loadMoreBtn">
                        Show more games
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  width="8" height="14" class="gallery__list_loadMoreBtn_arrow svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                    </button>
                </div>
            `;
    }
}
customElements.define('u-gallery', Gallery);

const galleryList = document.querySelector('.gallery__list');

const itemArr = [
    {
        img: './assets/img/gallery/battlefield1.jpg',
        name: 'BATTLEFIELD 1',
        link: '#'
    },
    {
        img: './assets/img/gallery/starwarsbf.jpg',
        name: 'STAR WARS:<br> Battlefront II',
        link: '#'
    },
    {
        img: './assets/img/gallery/battlefield4.jpg',
        name: 'BATTLEFIELD 4',
        link: '#'
    },
    {
        img: './assets/img/gallery/wot.jpg',
        name: 'WORLD OF TANKS',
        link: '#'
    },
    {
        img: './assets/img/gallery/gallery_element_1.jpg',
        name: 'ASSASSINS’S CREED:<br> Rogue',
        link: './product.html'
    },
    {
        img: './assets/img/gallery/gallery_element_2.jpg',
        name: 'FOR HONOR',
        link: '#'
    },
    {
        img: './assets/img/gallery/gallery_element_3.jpg',
        name: 'WORLD OF WARSHIPS',
        link: '#'
    },
    {
        img: './assets/img/gallery/gallery_element_4.jpg',
        name: 'CALL OF DUTY:<br> Infinite Warface',
        link: '#'
    },
]

const renderGallery = (el) => {
    return (
        `<div class="gallery__list_elem">
                            <img src="${el.img}" alt="#" class="gallery__list_elem_img">
                            <h3 class="gallery__list_elem_name">
                                ${el.name}
                            </h3>
                            <a href="${el.link}" target="_blank" class="gallery__list_elem_button">buy</a>
                        </div>`
    )
}

itemArr.forEach(el => {
    galleryList.insertAdjacentHTML('beforeend', renderGallery(el))
})
