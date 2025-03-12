import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { map , catchError } from 'rxjs/operators';
import { inject } from '@angular/core';


@Injectable({
  providedIn:'root',
})
export class DeveloperService {

  private baseUrl = 'https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers';
  developers!: Developer[];
  private httpClient = inject(HttpClient);

 //observable.pipe(operator1(), operator2(), operator3())

  getAllDevelopers(): Observable<Developer[]> 
  { 
    return this.httpClient.get<Developer[]>(this.baseUrl + "/all").pipe
     (
      map( response=> {this.developers = response; return response;}),  
      catchError(this.handleError)
     )
  }

   getDeveloperById(id: string): Developer | undefined {     
    return this.developers.find(developer => developer.id === id);
   }  

   addDeveloper(developer: Developer): Observable<Developer> {
    return this.httpClient.post<Developer>(this.baseUrl + "/add", developer).pipe(catchError(this.handleError));
   }

   deleteDeveloper(): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl + "/delete") 
   }

    handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
   }


}
