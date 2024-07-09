import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { HomeComponent } from './pages/Home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { LoginComponent } from './pages/Login/login/login.component';
import { TaskListComponent } from './pages/tarefas/task-list.component'; 
import { PontoComponent } from './pages/Ponto/ponto/ponto.component';
import { PageInicialComponent } from './pages/page-inicial/page-inicial.component';


const routes: Routes = [
  {path:'detalhes/:id', component: DetalhesComponent },
  {path: 'inicio', component: PageInicialComponent},
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'editar/:id', component: EditarComponent },
  {path: 'login', component: LoginComponent, data: { hideNavbar: true } },
  {path: 'tarefas', component: TaskListComponent},
  {path: 'ponto', component: PontoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
