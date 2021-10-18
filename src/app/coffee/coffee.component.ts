import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  constructor() { }

  start_temp: number = 70;
  end_temp: number = 120;
  delta_temp!: any;
  micro_watt: number = 1200;
  eff: number = 55;
  fl_oz: number = 8;
  time_micro: number = 0;
  // array = [this.start_temp, this.end_temp, this.micro_watt, this.eff, this.fl_oz]
  continue!: any
  showEffSection: boolean = false
  eff_start_temp!: number;
  eff_end_temp!: number;
  eff_micro_watt!: number;
  eff_est!:number;
  sph_h20 = 4184;             //specific heat of h2o, units joules/kg C
  weight_1fl_oz_h20 = 0.03;   //weight of 1 fl oz of h2o in kg


  onUpdate(){
    console.log((this.start_temp/1))
    if(this.start_temp/1 && this.end_temp/1){
      this.delta_temp = this.end_temp-this.start_temp    
    } else {
      this.delta_temp =''
    }
    return this.delta_temp
  }

  checkForNumber(){
    let allNumbers = true
    let array = [this.start_temp, this.end_temp, this.micro_watt, this.eff, this.fl_oz]
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

  getTotalTime(){
    this.continue = this.checkForNumber()
    if (this.continue){
      let deltaTempC = ((this.end_temp-32)*5/9) - ((this.start_temp-32)*5/9)
      let jPerMugToIncrease1C = this.sph_h20 * this.weight_1fl_oz_h20 * this.fl_oz;
      let jToHeatMugToEndTemp = jPerMugToIncrease1C * deltaTempC
      let secInMicrowave = Math.round( jToHeatMugToEndTemp / (this.micro_watt*this.eff/100) )
    this.time_micro = secInMicrowave
    }
  }

  getMicroEff(){
    let deltaTempC = ((this.eff_end_temp-32)*5/9) - ((this.eff_start_temp-32)*5/9)
    let percent =
      this.sph_h20 * this.weight_1fl_oz_h20 * 8 * deltaTempC
        / 60
         /this.eff_micro_watt;
    this.eff_est = Math.round(percent*100)
  }

  showHide(){
    // console.log('showhide clicked')
    // console.log(this.showEffSection)
    this.showEffSection = !this.showEffSection
  }


  ngOnInit(): void {
    this.getTotalTime()
  }

}
