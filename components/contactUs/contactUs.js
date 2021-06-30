class ContactUs extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="contactUs">
                    <div class="contactUs__header">contact us</div>
                    <div class="contactUs__wrapper">
                        <div class="contactUs__leftBlock">
                            <h2 class="contactUs__leftBlock_header">Get in touch with us</h2>
                            <p class="contactUs__leftBlock_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sheets 
                                containing Lorem Ipsum passages sed do, At vero eos et accusamus et 
                                iusto odio digs qui blanditiis
                                <span class="contactUs__leftBlock_text-span">Leningradsky AVE 39, BLDG 79<br>
                                    MOSCOW 125167, Russia
                                </span>
                                <span class="contactUs__leftBlock_text-span">Telephone : +00 111 222 3333</span>
                                <span class="contactUs__leftBlock_text-span">FAX : +1 888 888 4444</span>
                                <a href class="contactUs__leftBlock_text-span">Email : <span class="contactUs__leftBlock_text-span-email">mail@example.com</span></a>
                            </p>
                        </div>
                        <form class="contactUs__form">
                            <input type="text" class="contactUs__form_name contactUs__form_input" placeholder="Name">
                            <input type="email" class="contactUs__form_email contactUs__form_input" placeholder="Email">
                            <textarea class="contactUs__form_message contactUs__form_input" placeholder="Message" rows="10"></textarea>
                            <button class="contactUs__form_submitBtn">submit</button>
                        </form>
                    </div>
                </div>
            `;
    }
}

customElements.define('u-contact-us', ContactUs)
