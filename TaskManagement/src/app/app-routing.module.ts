import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './Components/task-add/task-add.component';
import { TaskListComponent } from './Components/task-list/task-list.component';

const routes: Routes = [
  {path:'add',component: TaskAddComponent},
  {path : '' , component : TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
