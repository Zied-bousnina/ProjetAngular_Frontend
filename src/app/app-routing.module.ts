import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:"", component: FrontLayoutComponent, children: [
    {path:"", loadChildren:()=>import('./views/Front/log-in/log-in.module').then(m=>m.LogInModule)},
    {path:"Sign-in", loadChildren:()=>import('./views/Front/sign-in/sign-in.module').then(m=>m.SignInModule)}
  ]},
  {path: "user", component: UserLayoutComponent, children: [
    {path: "", loadChildren:()=>import('./views/User/list-genre/list-genre.module').then(m=>m.ListGenreModule)},
    {path: "ListFilm", loadChildren:()=>import('./views/User/list-film/list-film.module').then(m=>m.ListFilmModule)},
    {path: "ListGenre", loadChildren:()=>import('./views/User/list-genre/list-genre.module').then(m=>m.ListGenreModule)},
    {path: "ListFilm/:id_genre", loadChildren:()=>import('./views/User/list-film/list-film.module').then(m=>m.ListFilmModule)},
  ]},
  {path: "admin", component: AdminLayoutComponent, children:[
    {path: "", loadChildren:()=>import('./views/Admin/home/home.module').then(m=>m.HomeModule)},
    {path: "film/:id_genre", loadChildren:()=>import('./views/Admin/view-film/view-film.module').then(m=>m.ViewFilmModule)},
    {path: "addFilm", loadChildren:()=>import('./views/Admin/add-film/add-film.module').then(m=>m.AddFilmModule)},
    {path: "addGenre", loadChildren:()=>import('./views/Admin/add-genre/add-genre.module').then(m=>m.AddGenreModule)},
    {path: "updateFilm/:id_film", loadChildren:()=>import('./views/Admin/update-film/update-film.module').then(m=>m.UpdateFilmModule)},
    {path: "updateGenre/:id_genre", loadChildren:()=>import('./views/Admin/update-genre/update-genre.module').then(m=>m.UpdateGenreModule)},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
