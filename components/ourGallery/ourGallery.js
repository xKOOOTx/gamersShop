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
                            <p class="ourGallery__list_element_name">Assasin’s Creed: Rogue</p>
                            <button class="ourGallery__list_element_button">buy</button>
                        </li>
                        <li class="ourGallery__list_element">
                            <img src="./assets/img/gallery/gallery_element_2.jpg" alt="Tomb_Raider" class="ourGallery__list_element_img">
                            <p class="ourGallery__list_element_name">Tomb Raider</p>
                            <button class="ourGallery__list_element_button">buy</button>
                        </li>
                        <li class="ourGallery__list_element">
                            <img src="./assets/img/gallery/gallery_element_3.jpg" alt="Ryse" class="ourGallery__list_element_img">
                            <p class="ourGallery__list_element_name">Ryse: Son Of Rome</p>
                            <button class="ourGallery__list_element_button">buy</button>
                        </li>
                        <li class="ourGallery__list_element">
                            <img src="./assets/img/gallery/gallery_element_4.jpg" alt="World_Of_Warcraft" class="ourGallery__list_element_img">
                            <p class="ourGallery__list_element_name">World Of Warcraft: Wrath Of The Lich King</p>
                            <button class="ourGallery__list_element_button">buy</button>
                        </li>
                    </ul>
                </div>
            `;
    }
}

customElements.define('u-our-gallery', OurGallery)
