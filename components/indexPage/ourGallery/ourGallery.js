class OurGallery extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="ourGallery">
                    <h1 class="ourGallery__header">our gallery</h1>
                    <ul class="ourGallery__list">
                        <li class="ourGallery__list_element">
                            <img src="./assets/img/gallery/gallery_element_1.jpg" alt="Assasin’s_Creed" class="ourGallery__list_element_img">
                            <div class="ourGallery__list_element_wrapper">
                                <p class="ourGallery__list_element_name">Assasin’s Creed: Rogue</p>
                                <a href='./product.html' target="_blank" class="ourGallery__list_element_button">buy</a>
                            </div>
                        </li>
                        <li class="ourGallery__list_element">
                            <img src="./assets/img/gallery/gallery_element_2.jpg" alt="Tomb_Raider" class="ourGallery__list_element_img">
                            <div class="ourGallery__list_element_wrapper">
                                <p class="ourGallery__list_element_name">Tomb Raider</p>
                                <a href='./product.html' target="_blank" class="ourGallery__list_element_button">buy</a>
                            </div>
                        </li>
                        <li class="ourGallery__list_element">
                            <img src="./assets/img/gallery/gallery_element_3.jpg" alt="Ryse" class="ourGallery__list_element_img">
                            <div class="ourGallery__list_element_wrapper">
                                <p class="ourGallery__list_element_name">Ryse: Son Of Rome</p>
                                <a href='./product.html' target="_blank" class="ourGallery__list_element_button">buy</a>
                            </div>
                        </li>
                        <li class="ourGallery__list_element">
                            <img src="./assets/img/gallery/gallery_element_4.jpg" alt="World_Of_Warcraft" class="ourGallery__list_element_img">
                            <div class="ourGallery__list_element_wrapper">
                                <p class="ourGallery__list_element_name">World Of Warcraft: Wrath Of The Lich King</p>
                                <a href='./product.html' target="_blank" class="ourGallery__list_element_button">buy</a>
                            </div>
                        </li>
                    </ul>
                </div>
            `;
    }
}

customElements.define('u-our-gallery', OurGallery)
