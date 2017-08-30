import { AppPage } from './app.po';

describe('n0828 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should have a submit button`, () => {
    page.navigateTo();
    expect(page.getSubmitButtonCount()).toBe(1);
  });

  it(`should have a submit button`, () => {
    page.navigateTo();
    expect(page.getCheckboxCount()).toBe(1);
  });
});
