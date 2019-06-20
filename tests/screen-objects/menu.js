import Base from './base';
import { DEFAULT_TIMEOUT } from '../helpers/e2eConstants';

class Menu extends Base {
  constructor() {
    // The `all items` is used to verify that the menu container is open
    super('~test-ALL ITEMS');
  }

  get button() {
    return $('~test-Menu');
  }

  get webview() {
    return $('~test-WEBVIEW');
  }

  get logout() {
    return $('~test-LOGOUT');
  }

  /**
   * Open the menu
   *
   * @return {void}
   */
  open() {
    // Open the menu
    this.button.click();

    return this.waitUntilOpened();
  }

  /**
   * Wait until the menu is closed
   *
   * @return {void}
   */
  waitUntilClosed() {
    return browser.waitUntil(() => !this.isShown(), DEFAULT_TIMEOUT);
  }

  /**
   * Wait until the menu is opened
   *
   * @return {void}
   */
  waitUntilOpened() {
    return browser.waitUntil(() => this.isShown(), DEFAULT_TIMEOUT);
  }

  /**
   * Click on the webview menu item
   *
   * @return {void}
   */
  openWebview() {
    this._menuClick(this.webview);

    return this.waitUntilClosed();
  }

  /**
   * Click on the logout menu item
   *
   * @return {void}
   */
  clickOnLogout() {
    this._menuClick(this.logout);

    return this.waitUntilClosed();
  }

  /**
   * A custom implementation of the menu click because iOS needs a custom implementation
   *
   * @param {Element} element
   *
   * @return {void}
   *
   * @private
   */
  _menuClick(element) {
    if (browser.isIOS) {
      return browser.execute('mobile: tap',
        {
          element: element.elementId,
          x: 10,
          y: 10,
        },
      );
    }

    return element.click();
  }

}

export default new Menu();
