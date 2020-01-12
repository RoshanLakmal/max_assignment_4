import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numsArrayOdd = [];
  numsArrayEven = [];
  finish = false;

  onStartGame(startNumber: number){
    this.finish = false;
    if(startNumber%2===0){
      this.numsArrayEven.push(startNumber);
    }else{
      this.numsArrayOdd.push(startNumber);
    }
    
    console.log(startNumber);
  }

  onStopGame(startNumber: number){
    this.finish = true;
    console.log(startNumber);
  }
}
