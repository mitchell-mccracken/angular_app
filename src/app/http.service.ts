import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod(){
    console.log('HTTP service!')
  }

  getQuote(){
    return this.http.get('https://seinfeld-quotes.herokuapp.com/random')
  }
}
