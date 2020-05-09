import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '~/app/shared/user.model';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'Login',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.scss'],
})
export class LoginComponent {
    user: User;

    @ViewChild('password', { static: false }) password: ElementRef;

    constructor(private routerExtension: RouterExtensions) {
        this.user = new User();
    }

    submit() {
        console.log('user: ', JSON.stringify(this.user));
        if (!this.user.username || !this.user.password) {
            this.alert('Please provide both a username and password.');
            return;
        }

        this.login();
    }

    login() {
        this.routerExtension.navigate(['/tabs/default'], {
            clearHistory: true,
        });
    }

    alert(message: string) {
        dialogs.alert(message);
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
}
