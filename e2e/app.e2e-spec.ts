import { YLResourcesPage } from './app.po';

describe('yl-resources App', () => {
  let page: YLResourcesPage;

  beforeEach(() => {
    page = new YLResourcesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
