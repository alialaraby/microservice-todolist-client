import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BadRequestError } from '../app-errors/bad-request-error';
import { NotFountError } from '../app-errors/not-found-error';
import { AppError } from '../app-errors/app-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll(url: string, headers: any, data: any){
    return this.http.post(url, data, headers);
  }
  getAllUsers(url: string){
    return this.http.get(url);
  }


  private handleError(error: HttpErrorResponse){
    if(error.status === 400)
      return throwError(new BadRequestError(error));

    if(error.status === 404)
      return throwError(new NotFountError(error));
      
    return throwError(new AppError(error));
  }
}
