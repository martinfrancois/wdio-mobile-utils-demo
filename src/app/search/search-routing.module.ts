import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SearchComponent } from './search.component';

const routes: Routes = [
    { path: '', redirectTo: 'search' },
    { path: 'search', component: SearchComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class SearchRoutingModule {}
