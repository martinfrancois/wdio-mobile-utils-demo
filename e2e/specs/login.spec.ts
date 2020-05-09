import loginScreen from '../pageobjects/login.screen';
import { FixtureBuilder } from '../fixture/fixtureBuilder';
import { Fixture } from '../fixture/fixture';

describe('Login', () => {
    let fixture: Fixture;

    beforeAll(() => {
        fixture = new FixtureBuilder().setup();
        loginScreen.navigateTo(fixture);
    });

    afterAll(() => {
        fixture.teardown();
    });

    it('should test', () => {
        browser.pause(20000);
    });
});
