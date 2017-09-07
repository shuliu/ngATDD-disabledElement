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

  it(`should have a checkbox`, () => {
    page.navigateTo();
    expect(page.getCheckboxCount()).toBe(1);
  });

  it(`should submit button is disabled`, () => {
    page.navigateTo();
    expect(page.checkSubmitButtonDisabled()).toBe(true);
  });

  it(`should submit button is disabled`, () => {
    page.navigateTo();
    page.check();
    expect(page.checkSubmitButtonDisabled()).toBe(false);
  });
});
