import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../option'
import { OPTIONS } from '../options'

@Component({
  selector: 'app-time-select',
  templateUrl: './time-select.component.html',
  styleUrls: ['./time-select.component.css']
})

export class TimeSelectComponent implements OnInit {

  @Input()
  id: string;
  selectId: string;

  options = OPTIONS;
  option: Option;
  constructor() {}

  ngOnInit() {
    this.selectId = "select" + this.id;
  }

  handleChange(e){
    var val = e.target.value;
    var elem = e.target.id;
    for(var i = 0; i < OPTIONS.length; i++){
      if(OPTIONS[i].currentSelect === elem){
        OPTIONS[i].currentSelect = "";
        OPTIONS[i].show = true;
      }
    }
    if(val > 0){
      OPTIONS[val].currentSelect = elem;
      OPTIONS[val].show = false;
    }
  }

  setSelectId(){
    return this.selectId;
  }
}
