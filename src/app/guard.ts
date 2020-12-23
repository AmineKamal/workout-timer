import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { State } from 'src/services/state';

@Injectable()
export class Guard implements CanActivate {
    constructor(private router: Router) {}

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (!State.loaded) {
            this.router.navigate(['loading']);
            return false;
        }

        return true;
    }
}
