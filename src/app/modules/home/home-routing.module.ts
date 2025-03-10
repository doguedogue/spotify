import { TracksModule } from './../tracks/tracks.module';
import { HomeModule } from './home.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import(`@modules/tracks/tracks.module`).then(m=>m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import(`@modules/favorites/favorites.module`).then(m=>m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import(`@modules/history/history.module`).then(m=>m.HistoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
