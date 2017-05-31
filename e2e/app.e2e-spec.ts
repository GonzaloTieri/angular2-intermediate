import { Angular2IntermediatePage } from './app.po';

describe('angular2-intermediate App', () => {
  let page: Angular2IntermediatePage;

  beforeEach(() => {
    page = new Angular2IntermediatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
