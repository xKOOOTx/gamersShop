class NewsAndEvents extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="newsAndEvents">
                    <div class="newsAndEvents__header">News & Events</div>
                    <div class="newsAndEvents__mainBlock">
                        <div class="newsAndEvents__mainBlock_left">
                            <h2 class="newsAndEvents__mainBlock_left_header">latest news</h2>
                            <ul class="latestNews__list">
                                <li class="latestNews__list_element">
                                    <div class="latestNews__date">
                                        <p class="latestNews__date_day">15</p>
                                        <p class="latestNews__date_month">june</p>
                                        <p class="latestNews__date_year">2016</p>
                                    </div>
                                    <div class="latestNews__news">
                                        <h2 class="latestNews__news_header">Fugiat Quo Voluptas</h2>
                                        <p class="latestNews__news_text">Quis autem vel eum iure reprehenderit qui in ea voluptate
                                            velit esse.
                                        </p>
                                    </div>
                                </li>
                                <li class="latestNews__list_element">
                                    <div class="latestNews__date">
                                        <p class="latestNews__date_day">18</p>
                                        <p class="latestNews__date_month">june</p>
                                        <p class="latestNews__date_year">2016</p>
                                    </div>
                                    <div class="latestNews__news">
                                        <h2 class="latestNews__news_header">FugQui In Ea Voluptate</h2>
                                        <p class="latestNews__news_text">Quis autem vel eum iure reprehenderit qui in ea voluptate
                                            velit esse.
                                        </p>
                                    </div>
                                </li>
                                <li class="latestNews__list_element">
                                    <div class="latestNews__date">
                                        <p class="latestNews__date_day">20</p>
                                        <p class="latestNews__date_month">june</p>
                                        <p class="latestNews__date_year">2016</p>
                                    </div>
                                    <div class="latestNews__news">
                                        <h2 class="latestNews__news_header">Autem Vel Eum Iure</h2>
                                        <p class="latestNews__news_text">Quis autem vel eum iure reprehenderit qui in ea voluptate
                                            velit esse.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="newsAndEvents__mainBlock_right">
                            <div class="newsAndEvents__mainBlock_right_header">
                                <h2 class="newsAndEvents__mainBlock_right_h2">Featured Events</h2>
                                <div class="newsAndEvents__mainBlock_right_buttonsBlock">
                                    <i class="fas fa-angle-left newsAndEvents__mainBlock_right_buttons" id="featuredEventsLeftBtn"></i>
                                    <i class="fas fa-angle-right newsAndEvents__mainBlock_right_buttons" id="featuredEventsRightBtn"></i>
                                </div>
                            </div>
                            <div class="featuredEvents__sliderWrapper">
                                <div class="featuredEvents__gallery">
                                    <img src="./assets/img/featured_events/featured_events_img_1.jpg" alt="img" class="featuredEvents__gallery_img">
                                    <img src="./assets/img/featured_events/featured_events_img_2.jpg" alt="img" class="featuredEvents__gallery_img">
                                    <img src="./assets/img/featured_events/featured_events_img_3.jpg" alt="img" class="featuredEvents__gallery_img">
                                </div>
                                <div class="featuredEvents__events">
                                    <ul class="featuredEvents__events_list">
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header featuredEvents__events_element_header-active">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text closed">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text closed">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text closed">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="featuredEvents__sliderWrapper">
                                <div class="featuredEvents__gallery">
                                    <img src="./assets/img/featured_events/featured_events_img_3.jpg" alt="img" class="featuredEvents__gallery_img">
                                    <img src="./assets/img/featured_events/featured_events_img_1.jpg" alt="img" class="featuredEvents__gallery_img">
                                    <img src="./assets/img/featured_events/featured_events_img_2.jpg" alt="img" class="featuredEvents__gallery_img">
                                </div>
                                <div class="featuredEvents__events">
                                    <ul class="featuredEvents__events_list">
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header featuredEvents__events_element_header-active">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text closed">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="featuredEvents__sliderWrapper">
                                <div class="featuredEvents__gallery">
                                    <img src="./assets/img/featured_events/featured_events_img_2.jpg" alt="img" class="featuredEvents__gallery_img">
                                    <img src="./assets/img/featured_events/featured_events_img_3.jpg" alt="img" class="featuredEvents__gallery_img">
                                    <img src="./assets/img/featured_events/featured_events_img_1.jpg" alt="img" class="featuredEvents__gallery_img">
                                </div>
                                <div class="featuredEvents__events">
                                    <ul class="featuredEvents__events_list">
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header featuredEvents__events_element_header-active">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text closed">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text closed">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                        <li class="featuredEvents__events_element">
                                            <div class="featuredEvents__events_element_header">
                                                <h3 class="featuredEvents__events_element_headerH3">Assumenda Est Cliche Reprehenderit</h3>
                                            </div>
                                            <p class="featuredEvents__events_element_text closed">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
}

customElements.define('u-news-and-events', NewsAndEvents)

const featuredEventsHeader = document.querySelectorAll('.featuredEvents__events_element_header');
const newsText = document.querySelectorAll('.featuredEvents__events_element_text')

featuredEventsHeader.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if(!btn.classList.contains('featuredEvents__events_element_header-active')){
            newsText.forEach((newsTextElem) => {
                newsTextElem.classList.add('closed')
            })
            featuredEventsHeader.forEach((featuredEventsHeaderElem) => {
                featuredEventsHeaderElem.classList.remove('featuredEvents__events_element_header-active')
            })
            newsText[index].classList.remove('closed');
            btn.classList.toggle('featuredEvents__events_element_header-active')
        } else {
            btn.classList.remove('featuredEvents__events_element_header-active');
            newsText[index].classList.add('closed')
        }
    })
})


const prevSlide = document.getElementById('featuredEventsLeftBtn')
const nextSlide = document.getElementById('featuredEventsRightBtn')
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */

nextSlide.addEventListener('click', () => {
    showSlides(slideIndex += 1);
})

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
prevSlide.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
})

/* Устанавливаем текущий слайд: */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("featuredEvents__sliderWrapper");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}
