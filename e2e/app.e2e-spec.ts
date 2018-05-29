import { AssignMentPage } from './app.po';

describe('assign-ment App', function() {
  let page: AssignMentPage;

  beforeEach(() => {
    page = new AssignMentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
