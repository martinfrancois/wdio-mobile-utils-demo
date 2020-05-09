import { FixtureBuilder } from '../fixture/fixtureBuilder';
import { Fixture } from '../fixture/fixture';
import homeScreen from '../pageobjects/home.screen';

describe('Home', () => {
    let fixture: Fixture;

    beforeAll(() => {
        fixture = new FixtureBuilder().setup();
        homeScreen.navigateTo(fixture);
    });

    afterAll(() => {
        fixture.teardown();
    });

    it('should test', () => {
        browser.pause(20000);
    });
});
