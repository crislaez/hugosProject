import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'servicios',
    loadChildren: () => import('./service/service.module').then( m => m.ServiceModule),
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule),
  },
  {
    path: 'conocenos',
    loadChildren: () => import('./know-us/know-us.module').then( m => m.KnowUsModule),
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
