import { Routes } from "@angular/router";


import { HomeComponent, LoginComponent } from "./components";
import { AuthGuard } from "./auth.guard";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];
