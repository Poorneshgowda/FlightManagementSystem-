import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  doctorArry: Doctor[];
  slotsArry: Slot[];
  tempArry: Slot[];
  appointment: Appointment;
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
      this.patientService.getAllDoctors().subscribe(data=>{
        this.doctorArry = data;
      });

      this.patientService.getAllSlots().subscribe(data=>{
        this.slotsArry = data;
        this.tempArry = this.slotsArry;
      });
  }

  onPatientSubmit(patientForm: NgForm){
    let appointment : Appointment ={
      name: patientForm.value.name,
      contact: patientForm.value.contact,
      doctorId: patientForm.value.doctor,
      slotId: patientForm.value.slots,
      apptDate: patientForm.value.apptDate
    }

    this.patientService.bookAppointment(appointment).subscribe(data=>{
        this.appointment = data;
        //pass this appointment object to booking component.
        localStorage.setItem('name', this.appointment.name);
        localStorage.setItem('contact', this.appointment.contact);
        localStorage.setItem('doctorId', String(this.appointment.doctorId));
        localStorage.setItem('slotId', String(this.appointment.slotId));
        localStorage.setItem('apptDate', this.appointment.apptDate);
        //load booking confirmation component
        this.router.navigateByUrl('/booking-confirmation');

    });

    // console.log(patientForm.value.name);
    // console.log(patientForm.value.contact);
    // console.log(patientForm.value.doctor);
    // console.log(patientForm.value.slots);
    // console.log(patientForm.value.apptDate);
  }

  doctorSelect(patientForm: NgForm){
    this.slotsArry = this.tempArry;
    console.log('doctor selected..' + patientForm.value.doctor);
    console.log(this.slotsArry)
    this.slotsArry = this.slotsArry.filter(s=>s.doctor.id == patientForm.value.doctor)

  }
}

