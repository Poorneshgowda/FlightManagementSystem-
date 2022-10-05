import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';
import { FlightData } from '../model/flightData';
import { Vendor } from '../model/vendor.model';


@Injectable({
  providedIn: 'root'
})
export class AllFlightsDetailsService {

  constructor(private http: HttpClient) { }

  getAllFlights() :Observable<Vendor[]>{
    return this.http.get<Vendor[]>('http://localhost:8141/flight/all'); 
  }

  bookFlight(ss: string, sd: string, sc: string) :Observable<Flight[]>{
    return this.http.get<Flight[]>('http://localhost:8141/flight/' + ss + '/' + sd + '/' + sc);
  }
  
  showBooking(eid: number) :Observable<any> {
    return this.http.get('http://localhost:8141/flight/one/' + eid)
  }
 
/*
   getFlight(flight: Flight) :Observable<any> {
     return this.http.get<any>('http://localhost:8141/flight/' +flight)
   }

   */
   getFlightDetailsById(id: string) {
    return this.http.get<FlightData>('http://localhost:2008/flight/one/'+id)
  }
}