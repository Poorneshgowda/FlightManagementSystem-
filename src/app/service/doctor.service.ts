import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  getAllDoctors() : Observable<Doctor[]>{
    return this.http.get<Doctor[]>('http://localhost:8176/doctor/all')
  }
}
