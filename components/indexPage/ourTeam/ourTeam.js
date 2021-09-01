class OurTeam extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="ourTeam">
                    <div class="ourTeam__header">our team</div>
                    <ul class="ourTeam__list">
                        <li class="ourTeam__element">
                            <img src="./assets/img/ourTeam/ourTeam_1.jpg" alt="ourTeamPortrait" class="ourTeam__element_img">
                            <h3 class="ourTeam__element_name">Mary Jane</h3>
                            <p class="ourTeam__element_position">Vestibulum</p>
                            <div class="ourTeam__socials">
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_facebook"><i class="fab fa-facebook-f ourTeam__socials_facebookImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_twitter"><i class="fab fa-twitter ourTeam__socials_twitterImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_rss"><i class="fas fa-rss ourTeam__socials_rssImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_vk"><i class="fab fa-vk ourTeam__socials_vkImg"></i></a>
                            </div>
                        </li>
                        <li class="ourTeam__element">
                            <img src="./assets/img/ourTeam/ourTeam_2.jpg" alt="ourTeamPortrait" class="ourTeam__element_img">
                            <h3 class="ourTeam__element_name">Peter Parker</h3>
                            <p class="ourTeam__element_position">Ves tibulum</p>
                            <div class="ourTeam__socials">
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_facebook"><i class="fab fa-facebook-f ourTeam__socials_facebookImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_twitter"><i class="fab fa-twitter ourTeam__socials_twitterImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_rss"><i class="fas fa-rss ourTeam__socials_rssImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_vk"><i class="fab fa-vk ourTeam__socials_vkImg"></i></a>
                            </div>
                        </li>
                        <li class="ourTeam__element">
                            <img src="./assets/img/ourTeam/ourTeam_3.jpg" alt="ourTeamPortrait" class="ourTeam__element_img">
                            <h3 class="ourTeam__element_name">John Watson</h3>
                            <p class="ourTeam__element_position">Vestibulum</p>
                            <div class="ourTeam__socials">
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_facebook"><i class="fab fa-facebook-f ourTeam__socials_facebookImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_twitter"><i class="fab fa-twitter ourTeam__socials_twitterImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_rss"><i class="fas fa-rss ourTeam__socials_rssImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_vk"><i class="fab fa-vk ourTeam__socials_vkImg"></i></a>
                            </div>
                        </li>
                        <li class="ourTeam__element">
                            <img src="./assets/img/ourTeam/ourTeam_4.jpg" alt="ourTeamPortrait" class="ourTeam__element_img">
                            <h3 class="ourTeam__element_name">Steven Wilson</h3>
                            <p class="ourTeam__element_position">Vestibulum</p>
                            <div class="ourTeam__socials">
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_facebook"><i class="fab fa-facebook-f ourTeam__socials_facebookImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_twitter"><i class="fab fa-twitter ourTeam__socials_twitterImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_rss"><i class="fas fa-rss ourTeam__socials_rssImg"></i></a>
                                <a href="#" class="ourTeam__socials_link ourTeam__socials_vk"><i class="fab fa-vk ourTeam__socials_vkImg"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            `;
    }
}
customElements.define('u-our-team', OurTeam);
