import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  constructor() { }

  normal_speed: number = 70;
  new_speed: number = 75;
  distance: number = 50;
  normal_time!: any;
  new_time!: any;
  time_savings!: any;
  continue!: any;

  checkForNumber(){
    let allNumbers = true
    let array = [this.normal_speed, this.new_speed, this.distance]
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      if(allNumbers && el/1){
        // console.log(el + 'is a number')
      } else {
        allNumbers = false
      }
    }
    this.continue = allNumbers
    // console.log(this.continue)
    return this.continue
  }

  // getNormalSpeed(){
  //   this.continue = this.checkForNumber()
  //   if (this.continue){
  //     this.normal_speed
  //   }
  // }

  getTimeSavings(){
    this.continue = this.checkForNumber()
    if (this.continue) {
      //minutes
      this.normal_time = ((this.distance/this.normal_speed)*60).toFixed(1)
      this.new_time = ((this.distance/this.new_speed)*60).toFixed(1)
      this.time_savings = (this.normal_time - this.new_time).toFixed(1)
      console.log(this.normal_time)
      console.log(this.new_time)
      console.log(this.time_savings + ' minutes')
    }
  }

  ngOnInit(): void {
    this.getTimeSavings()
  }

}
