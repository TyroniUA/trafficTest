import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( public auth: AngularFireAuth,
    public router: Router, 
     ) { }

    login(email, password){
      event.preventDefault()
      
      this.auth.signInWithEmailAndPassword(email, password)
      .then( result => {
        this.router.navigate(['dashboard']);
      } ).catch((error) => {
        window.alert(error.message)
      }) 
    }
    
  ngOnInit(): void {
  }

}
