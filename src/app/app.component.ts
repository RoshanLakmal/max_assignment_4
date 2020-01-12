import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onStartGame(startNumber: number){
    console.log(startNumber);
  }

  onStopGame(myNumber:{startNumber: number}){
    console.log(myNumber.startNumber);
  }
}
