import { Fixture } from './Fixture';
import { Deeplink } from '../model/deeplink';

export class FixtureBuilder {
    // required

    // optional
    private _deeplinkRoute: Deeplink;

    /**
     * Opens a deeplink to one of the routes.
     * @param deeplinkRoute to open in the app
     */
    deeplinkRoute(deeplinkRoute: Deeplink) {
        this._deeplinkRoute = deeplinkRoute;
        return this;
    }

    /**
     * Builds the fixture and sets up the testing conditions according to the chosen options.
     */
    setup() {
        return new Fixture(this);
    }

    _getDeeplinkRoute() {
        return this._deeplinkRoute;
    }
}
