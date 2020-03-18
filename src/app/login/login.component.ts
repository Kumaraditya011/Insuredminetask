import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private baseUrl = "http://localhost:3001";

  constructor(private q:HttpClient,
    private router: Router) { }

  ngOnInit() {
  }
login(ls){
this.q.post(this.baseUrl + '/login', ls.value).subscribe(
  res => {
    console.log(res)
    localStorage.setItem('token', res['token'])
 this.router.navigate(['/special'])
  },
  err => console.log(err)
);


  // this.q.post(this.baseUrl + '/login', ls.value).subscribe(k =>{
  //   localStorage.setItem("UserData", JSON.stringify(k));
  // });
}
}
