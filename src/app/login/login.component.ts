import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public Login: string;
  public Password: string;
  public Message: string;

  constructor(private _snackBar: MatSnackBar, private _router: Router) {
    this.Login = '';
    this.Password = '';
    this.Message = '';
  }

  ngOnInit(): void {}

  public Authenticate(): void {
    if (this.Login === 'admin@admin.com' && this.Password === '1234') {
      let snackBarRef = this._snackBar.open('Authentication successful');

      this._router.navigate(['login-success']); //Redirect to this path, and change path in address bar
    } else {
      let snackBarRef = this._snackBar.open('Invalid credentials'); //Show error
    }
  }
}
