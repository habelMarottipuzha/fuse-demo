import { Injectable } from "@angular/core";
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenicationService {

    public get user$(): Observable<User> {
        return this._auth.user$;
    }

    constructor(private _auth: AuthService) {
    }

    
    public get accessToken() : string {
        return 'Basic dXNlcjpwYXNzd29yZA=='
    }    

    public logout() {
        this._auth.logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    }
}