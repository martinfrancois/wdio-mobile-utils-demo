import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
    moduleId: module.id,
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.scss'],
})
export class LoginComponent {
    username: string;
    password: string;
    @ViewChild('passwordField', { static: false }) passwordField: ElementRef;

    constructor(private routerExtension: RouterExtensions) {
        this.username = '';
        this.password = '';
    }

    submit() {
        console.log('user: ', this.username, ', ', this.password);
        if (!this.username || !this.password) {
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

    focusPassword() {
        this.passwordField.nativeElement.focus();
    }

    alert(message: string) {
        dialogs.alert(message);
    }
}
