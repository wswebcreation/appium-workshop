import Base from './base';
import { getTextOfElement } from '../helpers/utils'

class SwagListScreen extends Base {
  constructor() {
    super('~test-PRODUCTS');
  }

  get cart() {
    /**
     * Assignment 2.1.a:
     * Find the accessibility id of the cart
     * the ~ is telling WebdriverIO that you are going to use the accessibility id's
     */
    return $('~test-Cart');
  }

  /**
   * Get the cart amount
   *
   * @return {string}
   */
  getCartAmount() {
    // Dirty little hack =).
    // There is a little delay in adding / removing data from the cart
    browser.pause(100);

    /**
     * Assignment 2.1.b:
     * Get the text of the cart element and return it
     */
    return getTextOfElement(this.cart);
  }

  /**
   * Add the "Sauce Labs Bike Light" to the cart
   * (Yes, there are better and more flexible way to make a re-usable method
   *  for this, but that's not the purpose of this assignment ;-))
   *
   * @return {void}
   */
  addSauceLabsBikeLight() {
    /**
     * Assignment 2.2:
     * Add the "Sauce Labs Bike Light" to the cart
     *
     * HINT: Try to come up with a XPATH selector that returns the `Add to cart` button and uses the text of the swag item to find it
     */
    const xpathSelector = browser.isAndroid
      ? '//android.widget.TextView[contains(@text,"Sauce Labs Bike Light")]//ancestor::*[@content-desc="test-Item"]//*[@content-desc="test-ADD TO CART"]'
      : '//XCUIElementTypeStaticText[contains(@value,"Sauce Labs Bike Light")]//ancestor::*[@name="test-Item"]//*[@name="test-ADD TO CART"]';

    // This one is even  much faster, this is the iOS Class Chain
    // **/XCUIElementTypeOther[`name="test-Item"`]/**/XCUIElementTypeOther[`name CONTAINS "Sauce Labs Bike Light" AND name CONTAINS "ADD TO CART"`]/**/XCUIElementTypeOther[`name == "test-ADD TO CART"`]

    return $(xpathSelector).click();
  }
}

export default new SwagListScreen();
