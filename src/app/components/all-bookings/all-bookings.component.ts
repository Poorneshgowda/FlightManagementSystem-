import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor.model';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {

  docArr: Doctor[] = [];
  
  constructor(private doctorService: DoctorService){

  }
  
  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(data=>{
      this.docArr= data;
    });
    
  }

}
