import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  number = 0;
  myVar;
  @Output('btnStart') startGame = new EventEmitter<number>();
  @Output('btnSop') stopGame = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onStart(){
    this.myVar = setInterval(() => { 
      this.startGame.emit(this.number + 1);
      this.number++;
    }, 1000);
    
    console.log("Start");
  }

  onStop(){
    clearInterval(this.myVar);
    this.stopGame.emit(this.number);
    console.log("Stop"+this.number);
  }
}
