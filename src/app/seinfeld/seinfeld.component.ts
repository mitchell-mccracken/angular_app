import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClientModule } from '@angular/common/http';  //not sure if this is needed

@Component({
  selector: 'app-seinfeld',
  templateUrl: './seinfeld.component.html',
  styleUrls: ['./seinfeld.component.scss']
})
export class SeinfeldComponent implements OnInit {

  quote!: any
  test = 'my test'

  constructor(private _http: HttpService) { }

  seinfeldQuote(){
    this._http.getQuote().subscribe( data => {
      this.quote = data
    })
  }

  ngOnInit(): void {
    this._http.myMethod()
    // this._http.getQuote().subscribe( data => { 
    //   this.quote = data
    //   console.log(data)
    // })
    this.seinfeldQuote()
    console.log(this.quote)
  }

}
