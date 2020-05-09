import AppScreen from './app.screen';
import { Fixture } from '../fixture/fixture';

enum Selectors {
    TITLE = 'Login',
}

class LoginScreen extends AppScreen {
    constructor() {
        super(Selectors.TITLE);
    }

    navigateTo(fixture: Fixture): void {
        // is the default page, no navigation necessary
    }
}

const loginScreen = new LoginScreen();
Object.freeze(loginScreen);
export default loginScreen;
