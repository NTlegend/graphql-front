import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PostComponent} from './pages/post/post.component';

const routes: Routes = [
  {path: '', component: PostComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
