class AboutUs extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="aboutUs">
                    <article class="aboutUs__article">
                        <h1 class="aboutUs__article_h1">About Us!</h1>
                        <p class="aboutUs__article_text">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            <span class="aboutUs__article_text-span">
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </span>
                        </p>
                    </article>
                    <img src="./assets/img/aboutUs.jpg" alt="aboutUs" class="aboutUs__img">
                </div>
            `;
    }
}

customElements.define('u-about-us', AboutUs)
