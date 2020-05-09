import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LoginComponent } from '~/app/login/login.component';

export const COMPONENTS = [LoginComponent];

const routes: Routes = [
    {
        path: 'tabs',
        loadChildren: () =>
            import('~/app/tabs/tabs.module').then((m) => m.TabsModule),
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes, { enableTracing: false }),
    ],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
