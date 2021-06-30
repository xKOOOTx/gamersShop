let slideIndex = 1;

function showSlides(n, slideElement) {

    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    // let slides = document.getElementsByClassName("featuredEvents__sliderWrapper");
    let slides = slideElement;

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
