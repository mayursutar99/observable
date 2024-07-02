import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice';
  agent!:Observable<string>;
  ngOnInit(): void {
    this.agent=new Observable(
      function(observer){
       try {
        observer.next("title 1");
        observer.next("title 2");
        observer.next("title 3");
       } catch (error) {
        observer.error(error);
       }
      }
    )
    this.agent.subscribe(data=>{
      const sequence = interval(5000);

      sequence.subscribe(num=>{
       // console.log(num+" "+data);
      })
      // console.log(data);
    })
  }
 
}
