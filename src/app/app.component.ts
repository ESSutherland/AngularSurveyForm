import { Component } from '@angular/core';
import { OPTIONS } from './options'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
  }

    resetSelects(){
      for(var i = 0; i < OPTIONS.length; i++){
        OPTIONS[i].currentSelect = "";
        OPTIONS[i].show = true;
      }
    }
}
