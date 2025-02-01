import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { map , catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  developers!: Developer[];

  private baseUrl = 'https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers';

  constructor(private httpClient: HttpClient) { 
    // hardcoded data for now
    /* this.developers = [
      new Developer('1', 'Sivachandrakumar', 'Chandrasekaran', 'TypeScript', 2016),
      new Developer('2', 'Aadvik', 'Sivachandrakumar', 'JavaScript', 2020),
      new Developer('3' ,'Iswarya', 'Jayaraman', 'Python', 2019),
    ]; */
  }

 //observable.pipe(operator1(), operator2(), operator3())

  getAllDevelopers(): Observable<Developer[]> { 
    return this.httpClient.get<Developer[]>(this.baseUrl + "/all").pipe(
      map( response=> {this.developers = response; return response;}),  
          catchError(this.handleError))
    }

  
   /*  console.log(this.developers); 
    return this.developers; */

   getDeveloperById(id: string): Developer | undefined {
    return this.developers.find(developer => developer.id == id);
   }  

   addDeveloper(developer: Developer): Observable<Developer> {
    return this.httpClient.post<Developer>(this.baseUrl + "/add", developer).pipe(catchError(this.handleError));

   }

    handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
   }


}
