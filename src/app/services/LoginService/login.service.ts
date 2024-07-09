import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private httpClient: HttpClient) {
    }

    private readonly baseUrl = environment["endPoint"];

    login(Email: string, Senha: string) {
        return this.httpClient.post<any>(`${this.baseUrl}/login`, { Email: Email, Senha: Senha });
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    
    getToken(): string | null {
        return localStorage.getItem('token');
    }

}