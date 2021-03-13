import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() countEmitter = new EventEmitter<number>();
  interval;
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.countEmitter.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
