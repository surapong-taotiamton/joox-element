import { Component, OnInit  } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private http:HttpClient) {

  }
  
  ngOnInit(): void {
    this.title = "Hello world";

    // this.http.get("https://www.joox.com/th/th/single/YqaflYh+WnO0Iz2Mrp2_GA==").toPromise().then( (data) => {
    //   console.log(data);
    // })

  }
  title = '123';
}
