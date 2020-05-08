import { Component, OnInit } from '@angular/core';
import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
    selector: 'Browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.scss'],
})
export class BrowseComponent implements OnInit {
    infoText = 'Please tap the button below:';

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    showDialog(): void {
        dialogs
            .alert(
                "Tapping on this button doesn't do anything! Except opening this dialog maybe..."
            )
            .then(() => {
                console.log('Dialog closed!');
            });
        this.infoText = 'Thanks for tapping the button!';
    }
}
