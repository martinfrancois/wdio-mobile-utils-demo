import { Component, NgZone, OnInit } from '@angular/core';
import { AppURL, handleOpenURL } from 'nativescript-urlhandler';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    deeplinkRoute: string;

    constructor(
        private readonly zone: NgZone,
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        if (!this.deeplinkRoute) {
            setTimeout(() => {
                this.zone.run(() => {
                    this.routerExtension.navigateByUrl('/login', {
                        clearHistory: true,
                    });
                });
            });
        }
        handleOpenURL((appURL: AppURL) => {
            // Deeplink example: demodeeplink://tabs/default
            this.deeplinkRoute = appURL.path;
            console.log(
                'App was opened through deeplink: ' + this.deeplinkRoute
            );
            // Route to the deeplink
            setTimeout(() => {
                this.zone.run(() => {
                    this.routerExtension.navigateByUrl(
                        '/' + this.deeplinkRoute,
                        {
                            clearHistory: true,
                        }
                    );
                });
            });
        });
    }
}
