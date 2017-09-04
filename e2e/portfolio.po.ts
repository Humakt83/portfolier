import { browser, element, by } from 'protractor';

export class PortfolioPage {

    navigateTo() {
        return browser.get('/#portfolio');
    }

    getProjects() {
        return element.all(by.css('.project'));
    }

    clickTagContainingText(text: string) {
        element(by.cssContainingText('.tags .tag', text)).click();
    }
}
