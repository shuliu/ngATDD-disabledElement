import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSubmitButtonCount(): any {
    return element(by.css('button[type="submit"]')).count();
  }

  getCheckboxCount(): any {
    return element(by.css('input[type="checkbox"]')).count();
  }

  checkSubmitButtonDisabled(): any {
    return element(by.css('button[type="submit"]')).isEnabled();
  }

  check(): any {
    return element(by.css('input[type="checkbox"]')).click();
  }
}
