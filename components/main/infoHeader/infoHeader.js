class InfoHeader extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="infoHeader">
                    <div class="infoHeader__wrapper">
                        <div class="infoHeader__logo">
                            <p class="infoHeader__logo_top">historical</p>
                            <p class="infoHeader__logo_bottom">games</p>
                        </div>
                        <div class="infoHeader__contactsBlock">
                            <a href="+123 456 7890" class="infoHeader__contact">
                                <img src="./assets/img/phone_img.png" alt="phone_img"><p class="infoHeader__contact_number">+123 456 7890</p>
                            </a>
                            <a href="+123 456 7890" class="infoHeader__contact">
                                <img src="./assets/img/email_img.png" alt="email_img"><p class="infoHeader__contact_number">info@example.com</p>
                            </a>
                        </div>
                        <div class="infoHeader__searchBlock">
                            <input type="text" class="infoHeader__searchBlock_input" placeholder="Search">
                            <button class="infoHeader__searchBlock_inputBtn"><img src="./assets/img/search_img.png" alt="search" class="infoHeader__searchBlock_inputBtn_img"></button>
                        </div>
                    </div>
                </div>
            `;
    }
}

customElements.define('u-info-header', InfoHeader)
