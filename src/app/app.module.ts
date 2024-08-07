import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/Home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { EditarComponent } from './pages/editar/editar.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { ExcluirComponent } from './components/excluir/excluir.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TaskListComponent } from './pages/tarefas/task-list.component';
import { LoginComponent } from './pages/Login/login/login.component';
import { PontoComponent } from './pages/Ponto/ponto/ponto.component';
import { CommonModule } from '@angular/common';
import { PageInicialComponent } from './pages/page-inicial/page-inicial.component';
import { MatCheckboxModule } from '@angular/material/checkbox';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    DetalhesComponent,
    EditarComponent,
    FuncionarioFormComponent,
    ExcluirComponent,
    NavbarComponent,
    TaskListComponent,
    LoginComponent,
    PontoComponent,
    PageInicialComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
