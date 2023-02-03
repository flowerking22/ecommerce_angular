import { Component, OnInit } from '@angular/core';
import { WebscraperService } from 'src/app/_service/webscraper.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  result:any;
constructor(private webscraper:WebscraperService){

}
ngOnInit(): void {
  this.webscraper.helloworld();
}
getall(){
  this.webscraper.getall().subscribe((res:any)=>{
this.result=res;
alert("service run");
  })
}
}
