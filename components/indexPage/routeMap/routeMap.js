class RouteMap extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="routeMap">
                    <div class="routeMap__header">route map</div>
                    <div class="routeMap__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.1640494310395!2d37.53814500003318!3d55.79038925740084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54995f3ffffff%3A0xcefff54791d73767!2z0JvQtdC90LjQvdCz0YDQsNC00YHQutC40Lkg0L_RgC3Rgi4sIDM5INGB0YLRgNC-0LXQvdC40LUgODAsINCc0L7RgdC60LLQsCwgMTI1MTY3!5e0!3m2!1sru!2sru!4v1630338836932!5m2!1sru!2sru" width="1169" height="298" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            `;
    }
}

customElements.define('u-route-map', RouteMap)
