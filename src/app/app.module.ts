import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { CreateServerBlueprintComponent } from './create-server-blueprint/create-server-blueprint.component';
import { CockpitComponent } from './create-server-blueprint/cockpit/cockpit.component';
import { ServerElementComponent } from './create-server-blueprint/server-element/server-element.component';
import { ComponentComunicationLifeCycleComponent } from './component-comunication-life-cycle/component-comunication-life-cycle.component';
import { CockpitRecapComponent } from './component-comunication-life-cycle/cockpit-recap/cockpit-recap.component';
import { UserElementComponent } from './component-comunication-life-cycle/user-element/user-element.component';
import { GameComponent } from './game/game.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';
import { DirectivesComponent } from './directives/directives.component';
import { basicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { ActiveUsersComponent } from './services-challenge/active-users/active-users.component';
import { InactiveUsersComponent } from './services-challenge/inactive-users/inactive-users.component';
import { ServicesChallengeComponent } from './services-challenge/services-challenge.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeRoutingComponent } from './routing/home/home.component';
import { ServersComponentRoutes } from './routing/servers/servers.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponentRoute } from './routing/servers/server/server.component';
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { ServersService } from './routing/servers/servers.service';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { ObservablesComponent } from './observables/observables.component';
import { HomeComponentObservables } from './observables/home/home.component';
import { UserComponentObservables } from './observables/user/user.component';
import { FormComponent } from './form/form.component';
import { SecondFormComponent } from './form/second-form/second-form.component';
import { ThirdFormComponent } from './form/third-form/third-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { AuthInterceptorService } from './http-requests/auth-interceptor.service';
import { LoginInterceptorService } from './http-requests/login-interceptor.service';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CreateServerComponent,
    CreateServerBlueprintComponent,
    CockpitComponent,
    ServerElementComponent,
    ComponentComunicationLifeCycleComponent,
    CockpitRecapComponent,
    UserElementComponent,
    GameComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesComponent,
    basicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServicesChallengeComponent,
    RoutingComponent,
    HomeRoutingComponent,
    ServersComponentRoutes,
    EditServerComponent,
    ServerComponentRoute,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObservablesComponent,
    UserComponentObservables,
    HomeComponentObservables,
    FormComponent,
    SecondFormComponent,
    ThirdFormComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    FlyingHeroesPipe,
    HttpRequestsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
