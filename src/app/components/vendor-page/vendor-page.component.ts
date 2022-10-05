import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.model';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.css']
})
export class VendorPageComponent implements OnInit {

  // appointment: Appointment;
  vendor: Vendor;
  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
  }
  onVendorSubmit(vendorForm : NgForm){
    let vendor: Vendor={
      name: vendorForm.value.name,
      source: vendorForm.value.source,
      destination: vendorForm.value.destination,
      depDate: vendorForm.value.depDate,
      depTime: vendorForm.value.depTime,
      arvDate: vendorForm.value.arvDate,
      arvTime: vendorForm.value.arvTime,
      priceAdult: vendorForm.value.priceAdult,
      priceChild: vendorForm.value.priceChild,
      seats: vendorForm.value.seats
    }
    this.vendorService.bookFlight(vendor).subscribe(data=>{
      this.vendor = data;
    });
    this.router.navigateByUrl('/all-vendor')
  }

}