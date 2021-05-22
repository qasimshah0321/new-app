import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public txtUserName: string;
  public txtPassword: string;
  constructor(private _snackBar: MatSnackBar, private _router: Router) {
    this.txtUserName = '';
    this.txtPassword = '';
  }

  ngOnInit(): void {
  }


  public verifyUser():void {
    if(this.txtUserName === 'qasim' && this.txtPassword ==='test' ){
      this._snackBar.open('Authorized User');
      this._router.navigate(['login-success']);
    }
    else{
      this._snackBar.open('Invalid Credentials');
    }
  }

}
