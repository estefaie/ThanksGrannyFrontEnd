import { ThanksGrannyFrontEndPage } from './app.po';

describe('thanks-granny-front-end App', () => {
  let page: ThanksGrannyFrontEndPage;

  beforeEach(() => {
    page = new ThanksGrannyFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
