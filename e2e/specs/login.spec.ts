import loginScreen from '../pageobjects/login.screen';
import { FixtureBuilder } from '../fixture/fixtureBuilder';
import { Fixture } from '../fixture/fixture';
import homeScreen from '../pageobjects/home.screen';

describe('Login', () => {
    let fixture: Fixture;

    beforeAll(() => {
        fixture = new FixtureBuilder().setup();
        loginScreen.navigateTo(fixture);
    });

    afterAll(() => {
        fixture.teardown();
    });

    it('should be at the login screen', () => {
        loginScreen.waitForDisplayed();
    });

    it('should show a dialog and not login if no credentials are entered', () => {
        // TODO
    });

    it('should login when credentials are provided', () => {
        loginScreen.setUsername('Hello SauceCon Online 2020!');
        loginScreen.setPassword('test');
        loginScreen.loginButton.click();

        homeScreen.waitForDisplayed();
    });
});
