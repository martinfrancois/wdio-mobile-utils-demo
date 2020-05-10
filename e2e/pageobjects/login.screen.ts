import AppScreen from './app.screen';
import { Fixture } from '../fixture/fixture';
import { selectEqualsText } from 'wdio-mobile-utils';

enum Selectors {
    TITLE = '~Login',
    USERNAME = '~Username',
    PASSWORD = '~Password',
    LOGIN_BUTTON = '~Log in',
}

class LoginScreen extends AppScreen {
    constructor() {
        super(Selectors.TITLE);
    }

    navigateTo(fixture: Fixture): void {
        this.waitForDisplayed();
    }

    setUsername(text: string) {
        this.username.setValue(text);
    }

    setPassword(text: string) {
        this.password.setValue(text);
    }

    get username(): WebdriverIO.Element {
        return selectEqualsText(Selectors.USERNAME) as WebdriverIO.Element;
    }

    get password(): WebdriverIO.Element {
        return selectEqualsText(Selectors.PASSWORD) as WebdriverIO.Element;
    }

    get loginButton(): WebdriverIO.Element {
        return $(Selectors.LOGIN_BUTTON);
    }
}

const loginScreen = new LoginScreen();
Object.freeze(loginScreen);
export default loginScreen;
