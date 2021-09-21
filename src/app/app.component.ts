import { Component , AfterViewInit, ViewChild} from '@angular/core';
//import {MatPaginator} from '@angular/material/paginator';
//import {MatTableDataSource} from '@angular/material/table';

import {EmployeeService} from "./config/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    displayedColumns: string[] = ['Emp ID', 'first name', 'last name', 'symbol'];
    employees = [];
    totalPages = [];
    itemsPerPage = 10;
    start = 0;
    end = 10;
    currentPage = 1;
    constructor(private employeeService: EmployeeService) {}
    getData() {
        this.employeeService.getEmployees().subscribe((response) => {
            this.employees = response;
            if (this.employees.length) {
                this.totalPages = Array(this.employees.length/this.itemsPerPage).fill(0).map((x,i)=>i+1);
            }
        });
    }
    updatePaginaton(page) {
        if (page) {
            this.currentPage = page;
            this.start = (this.currentPage-1) * this.itemsPerPage;
            this.end = page * this.itemsPerPage;
        }
    }
}
