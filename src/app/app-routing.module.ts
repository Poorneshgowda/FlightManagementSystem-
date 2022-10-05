import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { HomeComponent } from './components/home/home.component';
import { PatientAppointmentComponent } from './components/patient-appointment/patient-appointment.component';

const routes: Routes = [
  {'path' : '', component: HomeComponent},
  {'path' : 'patient-appointment', component: PatientAppointmentComponent},
  {'path' : 'all-bookings', component: AllBookingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
