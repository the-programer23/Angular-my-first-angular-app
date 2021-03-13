import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { CreateServerBlueprintComponent } from './create-server-blueprint/create-server-blueprint.component';
import { GameComponent } from './game/game.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { ServicesChallengeComponent } from './services-challenge/services-challenge.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeRoutingComponent } from './routing/home/home.component';
import { ServersComponentRoutes } from './routing/servers/servers.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponentRoute } from './routing/servers/server/server.component';
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { ComponentComunicationLifeCycleComponent } from './component-comunication-life-cycle/component-comunication-life-cycle.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { HomeComponentObservables } from './observables/home/home.component';
import { UserComponentObservables } from './observables/user/user.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormComponent } from './form/form.component';
import { SecondFormComponent } from './form/second-form/second-form.component';
import { ThirdFormComponent } from './form/third-form/third-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpRequestsComponent } from './http-requests/http-requests.component';

const appRoutes: Routes = [
  {
    path: 'component-comunication-life-cycle',
    component: ComponentComunicationLifeCycleComponent,
  },
  { path: 'create-server', component: CreateServerComponent },
  {
    path: 'create-server-blueprint',
    component: CreateServerBlueprintComponent,
  },
  { path: 'directives', component: DirectivesComponent },
  { path: 'game', component: GameComponent },
  { path: 'server', component: ServerComponent },
  { path: 'create-servers', component: ServersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services-challenge', component: ServicesChallengeComponent },
  { path: 'success-alert', component: SuccessAlertComponent },
  { path: 'warning-alert', component: WarningAlertComponent },
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: 'home-routing', component: HomeRoutingComponent },
      {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
      },

      {
        path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponentRoutes,
        children: [
          {
            path: ':id',
            component: ServerComponentRoute,
            resolve: { server: ServerResolver },
          },
          {
            path: ':id/edit',
            component: EditServerComponent,
            canDeactivate: [CanDeactivateGuard],
          },
        ],
      },
    ],
  },

  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      { path: 'home-observable', component: HomeComponentObservables },
      { path: 'usuario/:identifier', component: UserComponentObservables },
    ],
  },
  { path: 'form', component: FormComponent },
  { path: 'second-form', component: SecondFormComponent },
  { path: 'third-form', component: ThirdFormComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'http-requets', component: HttpRequestsComponent },
  // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
