import { browser, element, by } from 'protractor';

export class PortfolierPage {

    navigateTo() {
        return browser.get('/');
    }

    getLogo() {
        return element(by.css('.logo'));
    }
}
