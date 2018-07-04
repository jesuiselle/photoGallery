import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result: any[];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('https://my-json-server.typicode.com/jesuiselle/ph/db')
      .subscribe(response => {
        this.result = response['photo-gallery'].photos;
      });
  }
}
