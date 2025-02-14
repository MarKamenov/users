import { Route } from "@angular/router";
import { HomePageComponent } from "./pages/home/home-page";
import { NotFoundPageComponent } from "./pages/not-found";
import { usersStateResolver } from "./core/resolvers";
import { userStateResolver } from "./core/resolvers/user-state.resolver";

export const appRoutes: Route[] = [
    // { path: 'home', component: HomePageComponent, data: { users: false }, },
    {
        path: 'users',
        resolve: { usersStateResolver },
        loadComponent: () => import(`./pages/users/users-page`)
            .then(mod => mod.UsersPageComponent)
    },
    {
        path: 'user/:id',
        resolve: { userStateResolver },
        loadComponent: () => import('./pages/user/user-page')
            .then(mod => mod.UserPageComponent)
    },
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];