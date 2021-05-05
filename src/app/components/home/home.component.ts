import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  start = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  nav(number) {
    switch (number) {
      case 1: {
        this.start = true
        this.router.navigate(['/']);
        break;
      }
      case 2: {
        this.start = false
        this.router.navigate(['/about']);
        break;
      }
      case 3: {
        this.start = false
        this.router.navigate(['/catalog']);
        break;
      }
      case 4: {
        this.start = false
        this.router.navigate(['/blog']);
        break;
      }
      case 5: {
        this.start = false
        this.router.navigate(['/post']);
        break;
      }
      case 6: {
        this.start = false
        this.router.navigate(['/contact-us']);
        break;
      }
    }
  }

}
