import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any[] = [
    { title: "first todo", content: "todo content to do!!" },
    { title: "second todo", content: "todo content 2 to do!!" },
    { title: "third todo", content: "todo content 2 to do!!" },
  ];
  users: any[] = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTM4NTg0NDY4NDEyZTEwODQ5NDZkZDMiLCJpYXQiOjE2MzIxMzk4NTcsImV4cCI6MTYzMjE0NzA1N30.TaeJfFgqCVgLUQpwijljePoQEc-Y5AYqYwQ7_DjbUME';
    const configs = { headers: new HttpHeaders().set('Authorization', 'B ' + token) }
    let data = {
      userId: '6138584468412e1084946dd3'
    }
    this.dataService.getAll('http://localhost:3000/users/getAllUsers', configs, data)
    .subscribe(
      (data: any) => {
        this.users = data.data as any[];
      },
      (error) => {
        console.log('something went wrong', error);
      }
    )
  }

}
