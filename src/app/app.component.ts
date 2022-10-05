import { Component, OnInit } from '@angular/core';
import { Doctor } from './model/doctor.model';
import { DoctorService } from './service/doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }

  /*
  docArr: Doctor[] = [];
  
  constructor(private doctorService: DoctorService){

  }
  
  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(data=>{
      this.docArr= data;
    });
    
  }
  */
 
}
