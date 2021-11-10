import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  person: any = {
    name: 'ali',
    age: 26,
    jobTitle: 'web developer',
  };

  tasks: any[] = [
    { title: "first todo", content: "todo content to do!!" },
    { title: "second todo", content: "todo content 2 to do!!" },
    { title: "third todo", content: "todo content 2 to do!!" },
  ];
  users: any[] = [];
  obsUsers: Observable<any> = new Observable<any>();
  prmsUsers: Promise<any> = new Promise(function (resolve: any, reject: any) {});
  value="";
  a: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTRkZmQwZmM4YzAxN2Q0NDlmOGYyNDciLCJpYXQiOjE2MzI1MDEyNjF9.3ubhGkQm3apmgrJ0tjv5dLLzx2zyEZLappdZorawVSQ';
    const configs = { headers: new HttpHeaders().set('Authorization', 'B ' + '') }
    let data = {
      userId: '614dfd0fc8c017d449f8f247'
    }
    
    // this.obsUsers = this.dataService.getAll('http://localhost:3000/users/getAllUsers', configs, data).pipe(
    //   shareReplay(),
    //   catchError(err => {
    //     console.log('Handling error locally and rethrowing it...', err);
    //     return throwError(err);
    //   })  
    // )

    this.dataService.getAll('http://localhost:3000/users/getAllUsers', configs, data)
    .subscribe(
      (data: any) => {
        this.users = data.data as any[];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        if(error.status === 401)
          console.log('un authorized');
        else
          console.log('resource unavailable');
      }, () => { console.log('done'); }
    );
  }

  clearValue() {
    this.value="";
  }

  originalOrderKeyValPipe(a: KeyValue<string, string>, b: KeyValue<string, string>) {
    return 0
  }
}
