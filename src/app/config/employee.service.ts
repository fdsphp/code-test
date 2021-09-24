import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) {}

    getEmployees() {
        return this.http.get('http://localhost:3000/employees');
    }
    saveData(data) {
        return this.http.post('http://localhost:3000/saveData', data);
    }

}