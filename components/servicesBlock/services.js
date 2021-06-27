class Services extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="servicesWrapper">
                    <section class="services">
                        <h1 class="services__header">services</h1>
                        <div class="services__block">
                            <div class="services__leftBlock">
                                <article class="services__leftBlock_article">
                                    <div class="services__leftBlock_articleBlock">
                                        <h2 class="services__leftBlock_articleHeader">Repreh Qui In Ea Voluptate</h2>
                                        <p class="services__leftBlock_articleText">
                                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                            reiciendis voluptatibus maiores alias consequatur aut 
                                            perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                    <div class="services__leftBlock_articleImgBlock">
                                        <img src="./assets/img/services/services_branch.png" alt="branch" class="services__leftBlock_articleImg">
                                    </div>
                                </article>
                                <article class="services__leftBlock_article">
                                    <div class="services__leftBlock_articleBlock">
                                        <h2 class="services__leftBlock_articleHeader">Aut Perferendis Doloribus</h2>
                                        <p class="services__leftBlock_articleText">
                                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                            reiciendis voluptatibus maiores alias consequatur aut 
                                            perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                    <div class="services__leftBlock_articleImgBlock">
                                        <img src="./assets/img/services/services_dollar.png" alt="dollar" class="services__leftBlock_articleImg">
                                    </div>
                                </article>
                                <article class="services__leftBlock_article">
                                    <div class="services__leftBlock_articleBlock">
                                        <h2 class="services__leftBlock_articleHeader">Maiores Alias Consequatur</h2>
                                        <p class="services__leftBlock_articleText">
                                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                            reiciendis voluptatibus maiores alias consequatur aut 
                                            perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                    <div class="services__leftBlock_articleImgBlock">
                                        <img src="./assets/img/services/services_graphics.png" alt="graphics" class="services__leftBlock_articleImg">
                                    </div>
                                </article>
                            </div>
                            <div class="services__rightBlock">
                                <article class="services__rightBlock_article">
                                    <div class="services__rightBlock_articleImgBlock">
                                        <img src="./assets/img/services/services_arrow.png" alt="arrow" class="services__rightBlock_articleImg">
                                    </div>
                                    <div class="services__rightBlock_articleBlock">
                                        <h2 class="services__rightBlock_articleHeader">Voluptatibus Maiores Alias</h2>
                                        <p class="services__rightBlock_articleText">
                                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                            reiciendis voluptatibus maiores alias consequatur aut 
                                            perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                </article>
                                <article class="services__rightBlock_article">
                                    <div class="services__rightBlock_articleImgBlock">
                                        <img src="./assets/img/services/services_house.png" alt="house" class="services__rightBlock_articleImg">
                                    </div>
                                    <div class="services__rightBlock_articleBlock">
                                        <h2 class="services__rightBlock_articleHeader">Dut Aut Reiciendis Maiores</h2>
                                        <p class="services__rightBlock_articleText">
                                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                            reiciendis voluptatibus maiores alias consequatur aut 
                                            perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                </article>
                                <article class="services__rightBlock_article">
                                    <div class="services__rightBlock_articleImgBlock">
                                        <img src="./assets/img/services/services_settings.png" alt="settings" class="services__rightBlock_articleImg">
                                    </div>
                                    <div class="services__rightBlock_articleBlock">
                                        <h2 class="services__rightBlock_articleHeader">Doloribus Volupta Maiores</h2>
                                        <p class="services__rightBlock_articleText">
                                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                            reiciendis voluptatibus maiores alias consequatur aut 
                                            perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            `;
    }
}
customElements.define('u-services', Services)
