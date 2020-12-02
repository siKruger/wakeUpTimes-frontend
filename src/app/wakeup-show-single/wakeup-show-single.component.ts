import { Component, OnInit } from '@angular/core';
import {ApiAccessService} from '../api-access.service';
import {Preset} from '../types/Preset';


@Component({
  selector: 'app-wakeup-show-single',
  templateUrl: './wakeup-show-single.component.html',
  styleUrls: ['./wakeup-show-single.component.css']
})
export class WakeupShowSingleComponent implements OnInit {

  constructor(private api: ApiAccessService) { }

  public times: Preset = {
    id: 0,
    presetName: "string",
    montag: new Date(),
    dienstag: new Date(),
    mittwoch: new Date(),
    donnerstag: new Date(),
    freitag: new Date(),
    samstag: new Date(),
    sonntag: new Date(),
  };


  ngOnInit(): void {
    this.getSingleTimes();
  }


  getSingleTimes(): void {
    this.api.getCustomTimes().subscribe((data) => {
      const buffer = data[0];

      // tslint:disable-next-line:forin
      for (const element in buffer) {


        if(element != "id" && element != "presetName") {
          const hours = (String)(buffer[element].substring(0 , 2));
          const minutes =  (String)(buffer[element].substring(3 , 5));

          const intHours = (Number)(hours);
          const intMinutes = (Number)(minutes);


          this.times[element] = new Date(0,0,0,intHours, intMinutes);
        }
      }
    });
  }

}
