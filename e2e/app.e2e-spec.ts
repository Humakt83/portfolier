import { PortfolierPage } from './app.po';

describe('Portfolier App', () => {
    let page: PortfolierPage;

    beforeEach(() => {
        page = new PortfolierPage();
    });

    it('contains portfolier logo', () => {
        page.navigateTo();
        expect(page.getLogo().isPresent).toBeTruthy();
    });
});
