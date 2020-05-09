import { DEFAULT_TIMEOUT } from '../constants';
import { Fixture } from '../fixture/fixture';

export default abstract class AppScreen {
    selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Wait for the screen to be visible
     *
     * @param {boolean} isShown
     */
    waitForDisplayed(isShown = true) {
        $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }

    goBack() {
        throw new Error('Not implemented yet');
    }

    /**
     * Navigates to this screen from the home screen.
     * Acts as a precondition for the testing of this screen.
     *
     * @param {Fixture} fixture allows the implementor to react depending on different conditions on the fixture,
     *                          for example to navigate differently depending on the deeplink.
     */
    abstract navigateTo(fixture: Fixture): void;
}
