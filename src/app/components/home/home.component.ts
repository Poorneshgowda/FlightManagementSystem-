import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { bookData } from 'src/app/model/bookData.model';
import { Flight } from 'src/app/model/flight.model';
import { FlightData } from 'src/app/model/flightData';
import { AllFlightsDetailsService } from 'src/app/service/all-flights-details.service';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  flightArr: FlightData[];
  bookDataArry: bookData;
  flight: Flight;
  constructor(private allFlightService : AllFlightsDetailsService,
    private bookingSrvice : BookingService, private router: Router) { }

  ngOnInit(): void {
  }

  onflightSubmit(flightForm : NgForm){
    this.allFlightService.bookFlight(flightForm.value.source,
      flightForm.value.destination,
      flightForm.value.depDate).subscribe(data=>{
        this.flightArr=data;
      });
      console.log(this.flightArr)
    }

     bookFlight(id: number){
        
        console.log(this.bookDataArry);
        console.log(id);
        localStorage.setItem('id',String(id));

        this.router.navigateByUrl('/booking-confirmation');
  }
}

/*



this.router.navigateByUrl('/booking-confirmation');   
*/