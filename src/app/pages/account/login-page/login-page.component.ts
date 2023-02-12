import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public formLogin!: FormGroup;

  constructor(private service: DataService, private fbuilder: FormBuilder) {

    this.formLogin = this.fbuilder.group({
      username : ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ])],
      password : ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ])]
    })

  }

}
