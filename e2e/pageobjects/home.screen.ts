import AppScreen from './app.screen';
import { Fixture } from '../fixture/fixture';

enum Selectors {
    TITLE = '~Home',
}

class HomeScreen extends AppScreen {
    constructor() {
        super(Selectors.TITLE);
    }

    navigateTo(fixture: Fixture): void {
        if (fixture.deeplink) {
            this.waitForDisplayed();
        } else {
            // TODO: navigate to tab
        }
    }
}

const homeScreen = new HomeScreen();
Object.freeze(homeScreen);
export default homeScreen;
