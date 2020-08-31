import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RepoComponent } from './components/repo/repo.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'repos', component: RepoComponent },
  { path: '**', component: ErrorpageComponent },

  { path: '', redirectTo: "/users", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
