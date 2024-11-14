import BasePage from '../../framework/page/BasePage.js';
import { Label, Button } from '../../framework/elements/index.js';

class SteamHomePage extends BasePage {
    constructor(){
        super(new Label('//*[@class="home_page_col_wrapper"]', 'Steam Home page data panel'), 'Steam Home Page');

        this.aboutButton = new Button('//*[@class="content"]//*[contains(@class,"menuitem") and contains(@href,"about")]', 'About Button');
    };

    async clickAboutButton() {
        await this.aboutButton.click();
    };
};

export default new SteamHomePage();