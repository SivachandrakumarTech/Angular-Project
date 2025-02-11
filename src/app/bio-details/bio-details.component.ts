import { Component } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute  } from '@angular/router';
import { Developer } from '../developer';
import { OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  imports: [CommonModule],
  templateUrl: './bio-details.component.html',
  styleUrl: './bio-details.component.css'
})
export class BioDetailsComponent implements OnInit {
   
  id!: any;
  dev!: Developer|undefined;
  
  private developerService = inject(DeveloperService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {   
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDeveloper(this.id);
  }

  getDeveloper(id: string) {    
    this.dev = this.developerService.getDeveloperById(id);
  }
}
