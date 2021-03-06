import { FixtureBuilder } from './fixtureBuilder';
import { openDeeplink } from 'wdio-mobile-utils';
import { Deeplink, DEEPLINK_PREFIX } from '../model/deeplink';
import { getAppId } from '../utils/utils';

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
            openDeeplink(
                DEEPLINK_PREFIX + this._deeplink,
                getAppId(),
                getAppId()
            );
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
