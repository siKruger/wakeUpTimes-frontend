import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import {Preset} from './types/Preset';


@Injectable({
  providedIn: 'root'
})

export class ApiAccessService {
  constructor(private http: HttpClient) { }


  private settingURL = 'http://localhost:8081/wakeup/settings';
  private presetURL = 'http://localhost:8081/wakeup/presets';



  getCustomTimes(): Observable<Preset> {
    return this.http.get<Preset>(this.presetURL + '/customTimes');
  }





}


