import { Angular4ComponentExamplePage } from './app.po';

describe('angular4-component-example App', () => {
  let page: Angular4ComponentExamplePage;

  beforeEach(() => {
    page = new Angular4ComponentExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
