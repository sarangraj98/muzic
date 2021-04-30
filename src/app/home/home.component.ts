import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albums:any;
  tag:any;
  loading : boolean = false;
  dataLoaded:boolean = false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // let resp = this.http.get("https://api.napster.com/v2.2/albums/new?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4");
    
    // resp.subscribe((data)=>this.albums=data)
  }
  OnInput(event: any) {
    this.tag = event.target.value;
   
    }
  loadData():void{
    this.dataLoaded = false
    this.loading=true
    let resp = this.http.get(`http://api.napster.com/v2.2/search?query=${this.tag}&type=album&apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`);
    resp.subscribe((data)=>this.albums=data)
    this.loading = false
    this.dataLoaded = true
  }
}
