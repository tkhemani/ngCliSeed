import { CliAppPage } from './app.po';

describe('cli-app App', function() {
  let page: CliAppPage;

  beforeEach(() => {
    page = new CliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
