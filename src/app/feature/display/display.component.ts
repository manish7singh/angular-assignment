import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/feature/display/display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data: any;
  constructor(
    private service: DisplayService
  ) {
    
   }

  ngOnInit() {
    this.data = this.service.displayData();
    console.log(this.data);
  }

  deleteRecord(index: any) {
    this.data.splice(index, 1);
  }
}
