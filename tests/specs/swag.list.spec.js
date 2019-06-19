import LoginScreen from '../screen-objects/login';
import SwagListScreen from '../screen-objects/swagList';
import { restartApp } from '../helpers/utils';
import { LOGIN_USERS } from '../helpers/e2eConstants';

describe('Swag Item Overview', () => {
  /**
   * The before each will be executed before each `it`-test case and it will prevent
   * code duplication
   */
  beforeEach(() => {
    /**
     * Make sure we have a `fresh` state for each test case so the previous state will not
     * interfere with the new test
     */
    restartApp();
    // Wait for the screen to be loaded before starting a testcase
    LoginScreen.waitForIsShown();

    // Login
    LoginScreen.signIn(LOGIN_USERS.STANDARD);

    // Wait for the swag list to be shown
    SwagListScreen.waitForIsShown();
  });

  /**
   * Assignment 2:
   * 1. Validate that the cart holds no products
   *    see `../screen-objects/swagList.js` to add the selectors
   *    and the method to get the text
   * 2. Add the "Sauce Labs Bike Light" to the cart
   */
  it('should be able to add the "Sauce Labs Bike Light" to the cart', () => {
    // 1. Validate that the cart holds no products
    //    TIP: use something like `expect(pageObject.method).not.toContain('1');


    // 2. Add the "Sauce Labs Bike Light" to the cart


    // 3. Validate that the cart holds 1 product

  });
});
