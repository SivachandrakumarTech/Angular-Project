import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DeveloperService } from '../developer.service';
import { inject } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  templateUrl: './bio-create.component.html',
  styleUrl: './bio-create.component.css'
})
export class BioCreateComponent {

    developer!: Developer;

    private developerService = inject(DeveloperService);
    private formBuilder = inject(FormBuilder);
    private router = inject(Router);

    bioForm = this.formBuilder.group({
    firstNameControl:[''],
    lastNameControl: [''],
    favoriteLanguageControl: [''],
    yearStartedControl: ['']
  })

  onSubmit(){
    this.developer = new Developer("", this.bioForm.value.firstNameControl ?? '', this.bioForm.value.lastNameControl ?? '', this.bioForm.value.favoriteLanguageControl ?? '', 
      Number(this.bioForm.value.yearStartedControl) ?? 0);  
    this.addDeveloper(this.developer);
  }

  addDeveloper(developer: Developer){
    this.developerService.addDeveloper(developer).subscribe(
      (data: Developer) => {        
        console.log('Developer saved successfully', data);
        this.router.navigate(['/bio']);
      },
      (error: any) => {
        console.error('Error saving developer', error);
      }
    );

  }

}
