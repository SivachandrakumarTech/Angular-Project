import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import { BioCreateComponent } from './bio-create/bio-create.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { routeGuard } from './route.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataResolverService } from './data-resolver.service';

export const routes: Routes = [
    {
    path:'home', 
    title: "Home", component:HomeComponent
    },  
    {
     path:'bio', 
     title: "Bio",
     loadComponent:()=> import('./bio/bio.component').then(m => m.BioComponent),
     canActivate:[routeGuard], resolve: {data: DataResolverService} 
    },
    {
    path:'bio/:id',
    loadComponent:()=> import('./bio-details/bio-details.component').then(m => m.BioDetailsComponent), 
    canActivate:[routeGuard]
    },
    {
    path:"bio-create", 
    title: "Bio Create", 
    loadComponent:()=> import('./bio-create/bio-create.component').then(m => m.BioCreateComponent), 
    data: { preload: true }, canActivate:[routeGuard]
    }, 
    {
    path:"login",
    title: "Login", 
    component:LoginComponent
    },
    {
    path:'', 
    redirectTo:'home', 
    pathMatch:'full'
    },
    {
     path:'**', 
     component:PageNotFoundComponent
    }
]
