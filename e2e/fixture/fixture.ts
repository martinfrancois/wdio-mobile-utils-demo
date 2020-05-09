import { FixtureBuilder } from './FixtureBuilder';
import { openDeeplink } from 'wdio-mobile-utils';
import { Deeplink } from '../model/deeplink';

export class Fixture {
    private _deeplinkRoute: Deeplink;
    private _deeplink: string;

    constructor(fixtureBuilder: FixtureBuilder) {
        this._deeplinkRoute = fixtureBuilder._getDeeplinkRoute();

        this.setup();
    }

    /**
     * Sets up the testing environment according to the chosen options.
     */
    private setup() {
        if (this._deeplinkRoute) {
            this._deeplink = this._deeplinkRoute;
        }

        if (this._deeplink) {
            openDeeplink(this._deeplink);
        }
    }

    /**
     * Resets the test environment to be back to like it was before.
     */
    public teardown() {}

    get deeplink() {
        return this._deeplinkRoute;
    }
}
