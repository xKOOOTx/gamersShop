class Navigation extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="navigation">
                    <ul class="navigation__list">
                        <li class="navigation__list_element">
                            <a href="./index.html" class="navigation__list_link">home</a>
                        </li>
                        <li class="navigation__list_element">
                            <a href="./about.html" class="navigation__list_link">about</a>
                        </li>
                        <li class="navigation__list_element">
                            <a href="./services.html" class="navigation__list_link">services</a>
                        </li>
                        <li class="navigation__list_element">
                            <a href="./gallery.html" class="navigation__list_link">gallery</a>
                        </li>
                        <li class="navigation__list_element">
                            <a href="./news.html" class="navigation__list_link">news</a>
                        </li>
                        <li class="navigation__list_element">
                            <a href="./team.html" class="navigation__list_link">team</a>
                        </li>
                        <li class="navigation__list_element">
                            <a href="./contactUs.html" class="navigation__list_link">contact us</a>
                        </li>
                    </ul>
                </div>
            `;
    }
}

customElements.define('u-navigation', Navigation)



const pageName = window.location.href.split('gamersShop/')[1].split('.html')[0]

const links = document.querySelectorAll('.navigation__list_link');

links.forEach(el => {
    const elLink = el.href.split('gamersShop/')[1].split('.html')[0]
    if (pageName == elLink) {
        el.classList.add('navigation__list_link-active')
    }
})


