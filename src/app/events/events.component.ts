import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private baseUrl = "http://localhost/3001";

  booking: any = [];
  constructor(private q: HttpClient) { }
  ngOnInit() {
    // this.q.get(this.baseUrl + '/booking').subscribe(k => {
    //   this.booking = k['data'];
    //   console.log(this.booking);
    //   console.log(k);
    // });
    
    
  }




 


  
 
  
  
 


}
