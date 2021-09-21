import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
    httpClient: any;
    constructor(private http: HttpClient) {
        this.httpClient = http;
    }

    getEmployees() {
        return this.httpClient.get('http://localhost:3000/employees');
    }

}