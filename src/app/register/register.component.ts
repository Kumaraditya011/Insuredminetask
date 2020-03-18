import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private baseUrl = "http://localhost:3001";

  constructor(private q: HttpClient,
                private router: Router) { }

  ngOnInit() {
  }
  sendData(us){
    
    this.q.post(this.baseUrl + '/useradd', us.value).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res['token'])
     this.router.navigate(['/special'])
     
      },
      err => console.log(err)
    );

  }
}
