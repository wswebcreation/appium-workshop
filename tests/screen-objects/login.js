import { getTextOfElement } from '../helpers/utils';
import Base from './base';
import { DEFAULT_TIMEOUT } from '../helpers/e2eConstants';

class LoginScreen extends Base {
  constructor() {
    super('~test-Login');
  }

  get username() {
    return $('~test-Username');
  }

  get password() {
    return $('~test-Password');
  }

  get loginButton() {
    return $('~test-LOGIN');
  }

  get errorMessage() {
    /**
     * Assignment 1:
     * Find the accessibility id of the error message
     * the ~ is telling WebdriverIO that you are going to use the accessibility id's
     */
    return $('~');
  }

  /**
   * Sign in
   *
   * @param {object} userDetails
   * @param {string} userDetails.username
   * @param {string} userDetails.password
   */
  signIn(userDetails) {
    const { password, username } = userDetails;

    if (username !== '') {
      this.username.addValue(username);
    }
    if (password !== '') {
      this.password.addValue(password);
    }

    this.loginButton.click();
  }

  /**
   * Get the text or the error message container
   *
   * @return {string}
   */
  getErrorMessage() {
    this.errorMessage.waitForDisplayed(DEFAULT_TIMEOUT);

    return getTextOfElement(this.errorMessage);
  }

  /**
   * Check if the error message is displayed
   *
   * @return {boolean}
   */
  isErrorMessageIsShown() {
    return this.isShown(this.errorMessage);
  }
}

export default new LoginScreen();
