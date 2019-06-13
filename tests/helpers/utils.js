/**
 * The app is opened by Appium by default, when we start a new test
 * the app needs to be reset
 */
export function restartApp() {
  if (!browser.firstAppStart) {
    browser.reset();
  }
  // Set the firstAppstart to false to say that the following test can be reset
  browser.firstAppStart = false;
}


/**
 * Get the text of an element (including all child elements)
 *
 * @param {element} element
 * @param {boolean} isXpath
 *
 * @return {string}
 */
export function getTextOfElement(element, isXpath = false) {
  let visualText;

  try {
    if (browser.isAndroid) {
      visualText = element.$$('*//android.widget.TextView').reduce((currentValue, el) => `${ currentValue } ${ el.getText() }`, '');
    } else {
      const iosElement = isXpath ? element.$$('*//XCUIElementTypeStaticText') : element;
      if (isXpath) {
        visualText = element.$$('*//XCUIElementTypeStaticText').reduce((currentValue, el) => `${ currentValue } ${ el.getText() }`, '');
      } else {
        visualText = iosElement.getText();
      }
    }
  } catch (e) {
    visualText = element.getText();
  }

  return visualText.trim();
}

/**
 * Hide the keyboard, but only if it is present
 *
 * @param {Element} element
 *
 * @return {void}
 */
export function hideKeyboard(element) {
  // The hideKeyboard is not working on ios devices, so take a different approach
  if (!browser.isKeyboardShown()){
    return;
  }

  if (browser.isIOS) {
    return browser.touchAction({
      action: 'tap',
      x: 0,
      y: -40,
      element,
    });
  }

  try {
    return browser.hideKeyboard('pressKey', 'Done');
  } catch (e) {
    // Fallback
    return browser.back();
  }
}
