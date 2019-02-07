import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterSectionComponent } from './modules/center-section/center-section/center-section.component';

const routes: Routes = [
  {
    path: '',
    component: CenterSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
