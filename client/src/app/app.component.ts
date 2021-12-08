import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({//gives normal class extra powers, allows this class to be angular component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   //passing data to dom is by interpolation with {{title}}
  title = 'Jake Ford - Web and App Developer in Huntsville, Alabama';
  users: any; //turning off type safety in typescript

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
