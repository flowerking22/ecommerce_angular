import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebscraperService {
readonly amazon_url:string='  https://www.google.com/search?q=vivo+z1+pro&rlz=1C1VDKB_enIN1042IN1042&oq=&aqs=chrome.0.35i39i362l8.824652j0j7&sourceid=chrome&ie=UTF-8';
  constructor(private http:HttpClient) { }
  helloworld(){
    alert("Webscraper Service Work");
  }
  getall():any{
    return this.http.get(this.amazon_url.trim());
  }
}
