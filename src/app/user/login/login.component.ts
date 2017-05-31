import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  login(formValues): void {
    this._authService.login(formValues.userName, formValues.password);

    console.log(formValues);
  }

}
