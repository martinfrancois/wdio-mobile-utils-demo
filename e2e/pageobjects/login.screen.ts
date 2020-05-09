import AppScreen from './app.screen';
import { Fixture } from '../fixture/fixture';

enum Selectors {
    TITLE = '~Login',
    USERNAME = '~Username',
    PASSWORD = '~Password',
}

class LoginScreen extends AppScreen {
    constructor() {
        super(Selectors.TITLE);
    }

    navigateTo(fixture: Fixture): void {
        this.waitForDisplayed();
    }

    get username(): WebdriverIO.Element {
        return $(Selectors.USERNAME);
    }

    get password(): WebdriverIO.Element {
        return $(Selectors.PASSWORD);
    }

    get loginTitle(): WebdriverIO.Element {
        return $$(Selectors.TITLE)[0];
    }

    get loginButton(): WebdriverIO.Element {
        return $$(Selectors.TITLE)[1];
    }
}

const loginScreen = new LoginScreen();
Object.freeze(loginScreen);
export default loginScreen;
