class InfoHeaderSocials extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="infoHeaderSocials">
                    <a href="#" class="infoHeaderSocials__link">
                        <i class="fab fa-facebook-f infoHeaderSocials__social"></i>
                    </a>
                    <a href="#" class="infoHeaderSocials__link">
                        <i class="fab fa-twitter infoHeaderSocials__social"></i>
                    </a>
                    <a href="#" class="infoHeaderSocials__link">
                        <i class="fas fa-rss infoHeaderSocials__social"></i>
                    </a>
                    <a href="#" class="infoHeaderSocials__link">
                        <i class="fab fa-vk infoHeaderSocials__social"></i>
                    </a>
                </div>
            `;
    }
}

customElements.define('u-info-header-socials', InfoHeaderSocials)
