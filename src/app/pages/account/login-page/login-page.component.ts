import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public formLogin!: FormGroup;
  public busy!: boolean;

  constructor(private service: DataService, private fbuilder: FormBuilder) {

    this.formLogin = this.fbuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ])]
    })

  }

  ngOnInit() {
    const token = sessionStorage.getItem('tokenLogin.PetShop');
    if (token) {
      console.log('autenticando..');
      this.busy = true;
      sessionStorage.clear();
      this.service
        .authenticate(this.formLogin.value)
        .subscribe(
          (data: any) => {
            console.log(data)
            sessionStorage.setItem('tokenLogin.PetShop', data.token)
            this.busy = false;
          },
          (err) => {
            sessionStorage.clear();
            this.busy = false;
          }
        );
    }else{
      console.log('ainda não logado');
    }
  }


  submit() {
    this.busy = true;
    this.service
      .authenticate(this.formLogin.value)
      .subscribe(
        (data: any) => {
          console.log(data)
          sessionStorage.setItem('tokenLogin.PetShop', data.token)
          this.busy = false;
        },
        (err) => {
          console.log(err)
          this.busy = false;
        }
      );
  }

}
