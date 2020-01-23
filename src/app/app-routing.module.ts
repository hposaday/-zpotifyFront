import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';


const routes: Routes = [
  { path: '', redirectTo: 'lanzamientos', pathMatch: 'full' },
  { path: 'lanzamientos', component: HomeComponent },
  { path: 'artist/:id', component:ArtistComponent }
/*   { path: 'create-order', component: CreateOrderComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-detail', component: OrderDetailComponent }, */

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
