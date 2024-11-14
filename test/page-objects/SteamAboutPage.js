import BasePage from '../../framework/page/BasePage.js';
import { Label, Button } from '../../framework/elements/index.js';

class AboutPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="about_monitor_video"]', 'About page monitor video'), 'About Steam Page');

        this.installSteamButton = new Button('//*[@id="about_header_area"]//*[@class="about_install_steam_link"]', 'Install steam button');
    };

    async downloadSteam() {
        await this.installSteamButton.click();
    };
};

export default new AboutPage();