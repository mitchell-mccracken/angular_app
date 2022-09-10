import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  constructor() { }

  choices: Array<any> = [
    { value: '' },
    { value: '' },
  ];

  showResult:boolean = false;
  topChoice:string = '';
  choiceObj:any = {};
  sorted:Array<any> = [];
  sortedKeys:Array<string> = [];
  sortedKeysSmall:Array<string> = [];
  winner:Array<any> = [];

  pair!:any;


  ngOnInit(): void {
  }

  addChoice(){
    this.choices.push({ value: '' })
  }

  trackByFn(i:any, item:any){
    return i;
  }

  generateDecision(){
    const _choices = this.choices.map( c => c.value );
    let choiceObj!:any;
    choiceObj = {};
    const len = _choices.length;
    const n = 10 * len;
    for (let i = 0; i < n; i++) {
      const idx:number = Math.floor( Math.random() * len )
      const _val:string = _choices[idx];
      if ( !choiceObj[_val] ) {
        choiceObj[_val] = 0;
      }
      choiceObj[_val] ++;
    }
    this.choiceObj = choiceObj;

    const sortedKeys = Object.keys(choiceObj).sort( ( a:string,b:string ) => {
      return choiceObj[b] - choiceObj[a];
    } );

    this.sortedKeys = sortedKeys;
    const idx = (sortedKeys.length >= 3)
      ? 3
      : sortedKeys.length;
    this.sortedKeysSmall = sortedKeys.slice(0, idx);

    const sorted = sortedKeys.map( k => { 
      const val:number = choiceObj[k];
      return { [k]: val };
    } );

    this.sorted = sorted;
  }

  updateArr(event:any){
    console.log(event.target.value)
    // this.choices[x] = event.target.value
  }

  

}
