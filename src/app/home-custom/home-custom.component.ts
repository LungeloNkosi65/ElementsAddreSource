import { Component, OnInit ,ViewEncapsulation,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-home-custom',
  templateUrl: './home-custom.component.html',
  styleUrls: ['./home-custom.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class HomeCustomComponent implements OnInit {
  @Input()  firstvalue:number;
  @Input()  secondvalue:number;
  @Output() action =new EventEmitter<number>();
  Sumof:number;
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    this.onClick();
  }
  onClick(){
  //  this.Sumof=parseInt(this.FirstValue)+ parseInt(this.SecondValue);
  console.log('First value & second value  ', this.firstvalue ,this.secondvalue)
  this.Sumof=(this.firstvalue*1) + (this.secondvalue*1);
   this.action.emit(this.Sumof);
  }
 

}
