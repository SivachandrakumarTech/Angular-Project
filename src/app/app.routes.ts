import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import { BioCreateComponent } from './bio-create/bio-create.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home',  component:HomeComponent},  
    {path:'bio', component:BioComponent},
    {path:'bio/:id', component:BioDetailsComponent},
    {path:"bio-create", component:BioCreateComponent}
]
