import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'live-chat-admin';
  /**
   *
   */
  constructor(private router : Router){
    
    
  }
  ngOnInit(): void {
      
  }
  
}