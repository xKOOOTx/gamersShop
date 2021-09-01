class Discounts extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="discounts">
                </div>
            `;
    }
}
customElements.define('u-discounts', Discounts);

const discountsBlock = document.querySelector('.discounts');

const discountsArr = [
    {
        name: 'CALL OF DUTY: <br> Modern Warfare 3',
        newPrice: '14.44',
        oldPrice: '28.90',
        background: './assets/img/gallery/discounts/discountsCoD.jpg',
    },
    {
        name: 'MEDAL OF HONOR',
        newPrice: '15.96',
        oldPrice: '29.99',
        background: './assets/img/gallery/discounts/discountsMoH.jpg',
    },
];

const discountRender = (el) => {
    return `
                <div class="discounts__element" style="background: url('${el.background}') right no-repeat">
                    <h3 class="discounts__element_discount">discount</h3>
                    <h1 class="discounts__element_name">${el.name}</h1>
                    <div class="discounts__element_price">
                        <p class="discounts__element_price_oldPrice">&#36;${el.newPrice}</p>
                        <p class="discounts__element_price_slash">/</p>
                        <p class="discounts__element_price_newPrice">&#36;${el.oldPrice}</p>
                    </div>
                    <a href="#" class="discounts__element_buyBtn">buy</a>
                </div>
            `
}

discountsArr.forEach(el => {
    discountsBlock.insertAdjacentHTML('beforeend', discountRender(el));
})
