import { CompAppPage } from './app.po';

describe('comp-app App', () => {
  let page: CompAppPage;

  beforeEach(() => {
    page = new CompAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
