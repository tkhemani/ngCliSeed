import { CliAppPage } from './app.po';

describe('ngCliSeed App', function() {
  let page: CliAppPage;

  beforeEach(() => {
    page = new CliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
