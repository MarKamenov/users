import { Route } from "@angular/router";
import { HomePageComponent } from "./pages/home/home-page";
import { NotFoundPageComponent } from "./pages/not-found";

export const appRoutes: Route[] = [
    { path: 'home', component: HomePageComponent, },
    {
        path: 'users',
        loadComponent: () => import(`./pages/users/users-page`)
            .then(mod => mod.UsersPageComponent)
    },
    {
        path: 'users/:id',
        loadComponent: () => import('./pages/user/user-page')
            .then(mod => mod.UserPageComponent)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];