import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UserModel;
  remember = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
   }

   onSubmit(form: NgForm) {
     if (form.invalid) {
       return;
     }

     this.auth.register(this.user).subscribe(resp => {
       console.log(resp);

       if(this.remember) {
        localStorage.setItem('email', this.user.email);
      }

      this.router.navigateByUrl('/home');
     }, (err) => {
       console.log(err.error.error.message)
     });
   }
}
