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
      visualText = element.$$('*//android.widget.TextView').reduce(
        (currentValue, el) => `${ currentValue } ${ el.getText() }`,
        '',
      );
    } else {
      if (isXpath) {
        visualText = element.$$('*//XCUIElementTypeStaticText').reduce(
          (currentValue, el) => `${ currentValue } ${ el.getText() }`,
          '',
        );
      } else {
        visualText = element.getText();
      }
    }
  } catch (e) {
    visualText = element.getText();
  }

  return visualText.trim();
}
