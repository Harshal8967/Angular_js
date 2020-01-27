import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: object;
  constructor() { }

  ngOnInit() {
    this.employee = [{Id: 1, Name: ' abhishek', Salary: 50000, Department: 'devops' },
    { Id: 2, Name: ' shubham', Salary: 20000, Department: 'java' },
    { Id: 3 , Name: ' Simran', Salary: 35000, Department: 'ml' },
    { Id: 4, Name : 'Harshal', Salary: 4000000, Department : 'ai' }];
  }
}
