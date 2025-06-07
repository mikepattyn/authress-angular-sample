import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { AuthressModule } from "@mikepattyn/authress-angular";
import { environment } from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      AuthressModule.forRoot({
        applicationId: environment.authressAppId,
        authressApiUrl: environment.authressApiUrl,
      })
    ),
    provideRouter(routes),
  ],
};
