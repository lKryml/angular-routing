import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpokenLanguagesComponent } from './spoken-languages/spoken-languages.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'spoken',
    component: SpokenLanguagesComponent,
  },
  {
    path: 'programming',
    component: ProgrammingLanguagesComponent,
  },
  {
    path: 'home',
    component: ParentComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
