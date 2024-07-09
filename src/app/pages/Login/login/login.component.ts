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
        const token = response.token; // Ajuste conforme o nome do campo retornado pela API
        this.loginService.setToken(token);
        alert('login realizado');
        this.router.navigate(['/inicio']);
      },
      err => {
        alert('Ocorreu um erro');
      }
    );
  }
}
