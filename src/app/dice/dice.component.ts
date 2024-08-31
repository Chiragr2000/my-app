import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
 public imageUrl: string = '/assets/dice0.png'; 

  rollDice() {
    const rndInt = Math.floor(Math.random() * 6) + 1;
    this.imageUrl = `/assets/dice${rndInt}.png`;
    
  if(rndInt===1){
    this.imageUrl='/assets/dice1.png'; 

  }
  else  if(rndInt===2){
    this.imageUrl='/assets/dice2.png'; 

  }
  }

}
