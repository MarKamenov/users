import { Route } from "@angular/router";
import { NotFoundPageComponent } from "./pages/not-found";
import { userStateResolver } from "./core/resolvers/user-state.resolver";

export const appRoutes: Route[] = [
    {
        path: 'users',
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