import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { __metadata } from 'tslib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loggedIn = false;
  users: Observable<any[]>;
    constructor( public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router ) {

    this.users = firestore.collection('users').valueChanges({ idField: 'id' })
  }
  ngOnInit(): void {
    
  }

  SignOut() {
    return this.auth.signOut().then(() => {
      
      this.router.navigate(['sign-in']);
    })
  }

  addEntity(nickName, email,  password){
   event.preventDefault();
      return this.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          
          this.firestore.collection('users')
          .add( {name: nickName, 
            email: email, 
            password: password,
            id: this.firestore.createId() 
          }).then(result => {return window.alert('Entity was added')}).catch( (error) => {window.alert(error.message)} )
        }).catch( (error) => {
          window.alert(error.message)
        })
  }

  edit(id){
    event.preventDefault();
   let block = document.getElementById(id)
   if (block.className ==='edit'){
     block.className='edit-active'
   }
   else{
     block.className='edit'
   }
   
  }
  
  update = (nickName, email, password, id) => {
    event.preventDefault();
    
    return this.firestore.collection('users').doc(id).update({ 
      name: nickName,
      email: email,
      password: password 
    }).then( () => { window.alert('Edit Succesfully')})
    .catch( (error) => { window.alert(error.message) } )
  }
  
} 
