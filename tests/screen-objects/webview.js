import Base from './base'

export const CONTEXT_REF = {
  NATIVE: 'native',
  WEBVIEW: 'webview',
};
const DOCUMENT_READY_STATE = {
  COMPLETE: 'complete',
  INTERACTIVE: 'interactive',
  LOADING: 'loading',
};

class Webview extends Base {
  constructor() {
    super('~test-WEBVIEW');
  }

  get input() {
    return $('~test-enter a https url here...');
  }

  get go() {
    return $('~test-GO TO SITE');
  }

  get menuButton() {
    /**
     * Assignment 3.1.a:
     * Find the selector open the menu
     */
    return $('your-css-selector');
  }

  get menu(){
    /**
     * Assignment 3.1.b:
     * Find the selector of the menu
     */
    return $('your-css-selector');
  }

  /**
   * Submit the url
   *
   * @param {string} url
   */
  submitURL(url) {
    this.input.addValue(url);

    return this.go.click();
  }

  /**
   * Wait for the webview context to be loaded
   *
   * By default you have `NATIVE_APP` as the current context. If a webview is loaded it will be
   * added to the current contexts and will looks something like this
   * `["NATIVE_APP","WEBVIEW_28158.2"]`
   * The number behind `WEBVIEW` can be any string
   */
  waitForWebViewContextLoaded() {
    browser.waitUntil(
      () => {
        const currentContexts = this.getCurrentContexts();

        return currentContexts.length > 1 &&
          currentContexts.find(context => context.toLowerCase().includes(CONTEXT_REF.WEBVIEW));
      },
      15000,
      'Webview context not loaded',
      100,
    );
  }

  /**
   * Returns an object with the list of all available contexts
   *
   * @return {object} An object containing the list of all available contexts
   */
  getCurrentContexts() {
    // See https://webdriver.io/docs/api/mjsonwp.html#getcontexts
    return browser.getContexts();
  }

  /**
   * Switch to native or webview context
   *
   * @param {string} context should be native of webview
   */
  switchToContext(context) {
    // See https://webdriver.io/docs/api/mjsonwp.html#switchcontext
    browser.switchContext(this.getCurrentContexts()[ context === CONTEXT_REF.WEBVIEW ? 1 : 0 ]);
  }

  /**
   * Wait for the document to be fully loaded
   */
  waitForWebviewDocumentFullyLoaded() {
    browser.waitUntil(
      () => browser.execute(() => document.readyState) === DOCUMENT_READY_STATE.COMPLETE,
      15000,
      'Website not loaded',
      100,
    );
  }
}

export default new Webview();
