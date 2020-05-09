import { FixtureBuilder } from '../fixture/fixtureBuilder';
import { Fixture } from '../fixture/fixture';
import homeScreen from '../pageobjects/home.screen';
import { Deeplink } from '../model/deeplink';

describe('Home', () => {
    let fixture: Fixture;

    beforeAll(() => {
        fixture = new FixtureBuilder().deeplinkRoute(Deeplink.TABS).setup();
        homeScreen.navigateTo(fixture);
    });

    afterAll(() => {
        fixture.teardown();
    });

    it('should test', () => {
        browser.pause(20000);
    });
});
