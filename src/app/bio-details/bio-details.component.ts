import { Component } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute  } from '@angular/router';
import { Developer } from '../developer';
import {OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  templateUrl: './bio-details.component.html',
  styleUrl: './bio-details.component.css'
})
export class BioDetailsComponent implements OnInit {
   
  id!: any;
  dev!: Developer|undefined;

  constructor(private developerService: DeveloperService, private route: ActivatedRoute) {    
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id')); // For debugging
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDeveloper(this.id);
  }

  getDeveloper(id: string) {    
    this.dev = this.developerService.getDeveloperById(id);
  }
}
