import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    console.log(this.authService.isAdmin())
  }


  Logout() {
    this.authService.logout();

    console.log(this.authService.isAdmin())
    this.router.navigate(['/']);

  }

}
