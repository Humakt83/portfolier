import { PortfolioPage } from './portfolio.po';

describe('Portfolier App', () => {
    let page: PortfolioPage;

    const initialProjectAmount = 8;

    beforeEach(() => {
        page = new PortfolioPage();
    });
    
    it('contains eight projects', () => {
        page.navigateTo();
        page.getProjects().count().then(result => expect(result).toEqual(initialProjectAmount) );
    });

    it('filters projects that have tag filing', () => {
        page.clickTagContainingText('filing');
        page.getProjects().count().then(result => expect(result).toEqual(4));
    });

    it('filters projects that have tag drilling', () => {
        page.clickTagContainingText('drilling');
        page.getProjects().count().then(result => expect(result).toEqual(1));
    });

    it('active tag can be toggled to show all projects', () => {
        page.clickTagContainingText('drilling');
        page.getProjects().count().then(result => expect(result).toEqual(initialProjectAmount) );
    });


});
