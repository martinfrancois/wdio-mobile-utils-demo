import { Component, OnInit } from '@angular/core';
import { AppURL, handleOpenURL } from 'nativescript-urlhandler';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        handleOpenURL((appURL: AppURL) => {
            console.log('Got the following appURL: ', appURL);
        });
    }
}
