import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { User } from '../../../../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  user = new User();

  err: number = 0;
  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin() {

    console.log(this.user)
    this.authService.login(this.user).subscribe((data) => {
        let jwToken = data.headers.get('Authorization');
        console.log(data.headers.get('Authorization'))
        this.authService.saveToken( jwToken!);

        this.err = 0;

        console.log(this.authService.isAdmin())
        // this.router.navigate(['/admin']);

      },(erreur) => {

        this.err = 1;
      }
    );
  }


}

