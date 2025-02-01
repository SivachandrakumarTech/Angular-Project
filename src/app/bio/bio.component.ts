import { Component, inject} from '@angular/core';
import { Developer } from '../developer';
import { CommonModule } from '@angular/common';
import { DeveloperService } from '../developer.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  imports: [CommonModule,RouterLink],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent implements OnInit {

  developers!:Developer[];
  //Using Inject
  private developerService = inject(DeveloperService);
  //Using constructor
  
/* constructor(private developerService: DeveloperService) {   
} */

ngOnInit(): void {
  this.developerService.getAllDevelopers().subscribe(
    (data: Developer[]) => {
      this.developers = data;
    },
    (error: any) => {
      console.error('Error fetching developers', error);
    }
  );
}
}
