import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { TimerComponent } from './timer/timer.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: TodoDashboardComponent},
  {path: 'timer', component: TimerComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: '', component: TodoDashboardComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
