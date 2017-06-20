import { FloatHeaderxPage } from './app.po';

describe('float-headerx App', () => {
  let page: FloatHeaderxPage;

  beforeEach(() => {
    page = new FloatHeaderxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
