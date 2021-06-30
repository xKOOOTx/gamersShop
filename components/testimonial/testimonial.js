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
                            <i class="fas fa-angle-left" id="testimonialPrevSlide"></i>
                        </button>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies volutpat, neque erat congue justo, ac pretium tellus eros a neque. Integer ipsum sem, 
                                consectetur a mollis ac, cursus eu ipsum.
                            </p>
                            <h3 class="testimonial__text_author">JOHN SMITH <span class="testimonial__text_author-span">- FOUNDER</span></h3>
                        </div>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                Thank you, strangers. You have given me hope.
                            </p>
                            <h3 class="testimonial__text_author">Thrall son of Durotan and Draka<span class="testimonial__text_author-span"> (birthname Go'el)</span></h3>
                        </div>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                Betrayer... In truth, it was I who was betrayed. Still, I am hunted. Still, I am hated. Now, my blind eyes see what others cannot: that sometimes the hand of fate must be forced! Now go forth... unleash the tides of Doom... Upon all those...who would oppose us.
                            </p>
                            <h3 class="testimonial__text_author">Illidan<span class="testimonial__text_author-span"> Stormrage</span></h3>
                        </div>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                My&nbsp;son, a&nbsp;terrible darkness has returned to&nbsp;our world. As&nbsp;before, it&nbsp;seeks to&nbsp;annihilate everything that we&nbsp;hold dear. I&nbsp;go to&nbsp;face&nbsp;it, knowing&nbsp;I may not return. All my&nbsp;life&nbsp;I have lived by&nbsp;the sword. I&rsquo;ve seen kingdoms burn, and watched brave heroes die in&nbsp;vain. It&rsquo;s been difficult for me&nbsp;to&nbsp;trust after losing so&nbsp;much. But from you&nbsp;I have learned patience, tolerance, and faith. Anduin, I&nbsp;now believe as&nbsp;you&nbsp;do, that peace is&nbsp;the noblest aspiration. But to&nbsp;preserve&nbsp;it, you must be&nbsp;willing to&nbsp;fight!
                            </p>
                            <h3 class="testimonial__text_author">Varian Wrynn<span class="testimonial__text_author-span"></span></h3>
                        </div>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                I be Vol'jin, leader of the Darkspear tribe. It be good that the Thrall sent you when he did, mon. Our villages already be under attack by the human fleet! We've got no time to waste.
                            </p>
                            <h3 class="testimonial__text_author">Vol'jin Darkspear<span class="testimonial__text_author-span"> son of Sen'jin. The shadow hunter.</span></h3>
                        </div>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                Let's see. I've made one of your brothers my servant, and tore the other to bloody shreds. I wonder what your fate holds, Balnazzar?
                            </p>
                            <h3 class="testimonial__text_author">Sylvanas Windrunner<span class="testimonial__text_author-span"> Dark Lady aka the Banshee Queen</span></h3>
                        </div>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                You see, I am nothing but one more component in the great machine, one that has been running since the Well of Eternity was first shattered. The one thing that the original bits of Medivh and myself agree on is that this cycle needs to be shattered. Of course, I assure you, we are of one mind.
                            </p>
                            <h3 class="testimonial__text_author">Sargeras<span class="testimonial__text_author-span"> pronounced as "SAHR-gair-ahs"</span></h3>
                        </div>
                        <div class="testimonial__text">
                            <p class="testimonial__text_description">
                                Yes, Malfurion Stormrage, I am a dragon. A red dragon, to be precise. Long have I worn the form of one mortal creature or another, however, for it has been my choice to walk among you, teaching and learning as I strive for peace among all of us.
                            </p>
                            <h3 class="testimonial__text_author">Korialstrasz<span class="testimonial__text_author-span"> the prime consort of the Aspect of Life Alexstrasza</span></h3>
                        </div>
                        <button class="testimonial__button">
                            <i class="fas fa-angle-right" id="testimonialNexSlide"></i>
                        </button>
                    </div>
                </div>
            `;
    }
}

customElements.define('u-testimonial', Testimonial)


/* Начало слайдера */
/* Кнопка предыдущий слайд */
const prevSlide = document.getElementById('testimonialPrevSlide');
/* Кнопка следующий слайд */
const nextSlide = document.getElementById('testimonialNexSlide');
/* Блок самого слайдера (или же сами слайды) */
const testimonialSlides = document.getElementsByClassName("testimonial__text");

/* Вызываем(инициализируем) функцию слайдера */
showSlides(slideIndex, testimonialSlides);

/* Увеличиваем индекс на 1 - показываем следующий слайд */
nextSlide.addEventListener('click', () => {
    showSlides(slideIndex += 1, testimonialSlides);
})

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
prevSlide.addEventListener('click', () => {
    showSlides(slideIndex -= 1, testimonialSlides);
})
/* Конец слайдера */

