import { Injectable } from '@angular/core';
import { Data } from '../../data';
import { DataArray } from '../../Mock-Data';
@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  dataArray = DataArray;
  constructor() { }

  displayData() {
    return this.dataArray;
  }
}
