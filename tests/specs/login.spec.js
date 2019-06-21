import LoginScreen from '../screen-objects/login';
import SwagListScreen from '../screen-objects/swagList';
import { restartApp } from '../helpers/utils';
import { LOGIN_USERS } from '../helpers/e2eConstants';

describe('Login', () => {
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
  });

  it('should be able to login with a standard user', () => {
    LoginScreen.signIn(LOGIN_USERS.STANDARD);
    SwagListScreen.waitForIsShown();

    expect(SwagListScreen.isShown()).toEqual(true, 'Swag List screen was not shown');
  });

  /**
   * Assignment 1:
   * 1. Check the Login Screen Object, we need to find the selector for the error message,
   *    see `../screen-objects/login`
   * 2. validate that:
   *    - the error message is not shown
   *    - you can log in with 1 of the 4 error users (see `LOGIN_USERS` from `../helpers/e2eConstants`)
   *    - the error message is shown
   *
   * To make it easy for you all I already created the first test case,
   * make sure you remove the `x` in front of each `xit` so the test case will be executed
   */
  it('should not be able to login with a locked user', () => {
    expect(LoginScreen.isErrorMessageIsShown()).toEqual(false);

    LoginScreen.signIn(LOGIN_USERS.LOCKED);

    expect(LoginScreen.getErrorMessage()).toContain(
      'Sorry, this user has been locked out.',
      'The error message is not as expected',
    );
  });

  it('should show an error when no username is provided', () => {
    // Add test code here

    expect(LoginScreen.isErrorMessageIsShown()).toEqual(false);

    LoginScreen.signIn(LOGIN_USERS.NO_USER_DETAILS);

    expect(LoginScreen.getErrorMessage()).toContain('Username is required', 'The error message is not as expected');
  });

  it('should show an error when no password is provided', () => {
    // Add test code here

    expect(LoginScreen.isErrorMessageIsShown()).toEqual(false);

    LoginScreen.signIn(LOGIN_USERS.NO_PASSWORD);

    expect(LoginScreen.getErrorMessage()).toContain('Password is required', 'The error message is not as expected');
  });

  it('should show an error when no match is found', () => {
    // Add test code here

    expect(LoginScreen.isErrorMessageIsShown()).toEqual(false);

    LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

    expect(LoginScreen.getErrorMessage()).toContain(
      'Username and password do not match any user in this service.',
      'The error message is not as expected',
    );

  });
});
