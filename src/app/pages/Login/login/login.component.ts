import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  get dadosForm() {
    return this.loginForm.controls;
  }

  loginUser(): void {
    this.loginService.login(this.dadosForm['email'].value, this.dadosForm['senha'].value).subscribe(
      response => {
        if (response.dados) {
          const token = response.dados.token; 
          this.loginService.setToken(token);
          alert('Login realizado com sucesso');
          this.router.navigate(['/inicio']);
        } else {
          alert('Senha incorreta. Tente novamente.');
        }
      },
      err => {
        alert('Ocorreu um erro ao fazer login');
      }
    );
  }
}
