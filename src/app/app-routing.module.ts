import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LoginComponent } from '~/app/login/login.component';

export const COMPONENTS = [LoginComponent];

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'tabs',
        loadChildren: () =>
            import('~/app/tabs/tabs.module').then((m) => m.TabsModule),
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes, { enableTracing: true }),
    ],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
