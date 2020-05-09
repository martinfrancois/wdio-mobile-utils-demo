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
        this.waitForDisplayed();
    }
}

const homeScreen = new HomeScreen();
Object.freeze(homeScreen);
export default homeScreen;
