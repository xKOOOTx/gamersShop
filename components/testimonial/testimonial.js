class Testimonial extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="testimonialWrapper">
                    <div class="testimonialHeader">testimonial</div>
                    <img src="./assets/img/testimonial_quotes.png" alt="quotes" class="testimonialQuotes">
                    <div class="testimonial">
                        <button class="testimonial__button">
                            <i class="fas fa-angle-left"></i>
                        </button>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies volutpat, neque erat congue justo, ac pretium tellus eros a neque. Integer ipsum sem, 
                                consectetur a mollis ac, cursus eu ipsum.
                            </p>
                            <h3 class="testimonial__text_author">JOHN SMITH <span class="testimonial__text_author-span">- FOUNDER</span></h3>
                        </div>
                        <button class="testimonial__button">
                            <i class="fas fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            `;
    }
}

customElements.define('u-testimonial', Testimonial)
