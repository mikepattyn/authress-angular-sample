import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginClient } from "@authress/login";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly loginClient: LoginClient,
    private readonly router: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      // Attempt to ensure a valid token exists
      const token = await this.loginClient.ensureToken();
      
      if (token) {
        console.log("Authenticated with token:", token);
        return true;
      }
    } catch (error) {
      console.error("Error ensuring token:", error);
    }

    console.log("Unauthenticated, navigating to login.");
    this.router.navigate(["", "login"]);
    return false;
  }
}
