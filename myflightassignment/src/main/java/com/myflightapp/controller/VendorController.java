package com.myflightapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myflightapp.model.Vendor;
import com.myflightapp.repository.VendorRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class VendorController {

	@Autowired
	private VendorRepository vendorRepository;
	
	
	@PostMapping("/flight/insert")
	public Vendor insertFlightDetails(@RequestBody Vendor vendor) {
		return vendorRepository.save(vendor);
	}
	
	@GetMapping("/flight/all")
	public List<Vendor> getFlightDetails() {
		return vendorRepository.findAll();
	}
	
	@GetMapping("/flight/{sname}")
	public List<Vendor> getVendorBySource(@PathVariable("sname") String sname) {
		List<Vendor> list = vendorRepository.getVendorBySource(sname);
		return list;
	}
	
	@GetMapping("/flight/{sname}/{dname}")
	public List<Vendor> getFlightBySourceDestination(@PathVariable("sname") String sname,
												@PathVariable("dname") String dname) {
		List<Vendor> list = vendorRepository.getFlightBySourceDestination(sname,dname);
		return list;
	}
	
	@GetMapping("/date/{date}")
	public List<Vendor> getAllFlight(@PathVariable("date") String date) {
		List<Vendor> list = vendorRepository.getAllFlight(date);
		return list;
	}
	
	@GetMapping("/flight/{sname}/{dname}/{date}")
	public List<Vendor> getFlightBySourceDestinationDepDate(@PathVariable("sname") String sname,
															@PathVariable("dname") String dname,
															@PathVariable("date") String date) {
		List<Vendor> list = vendorRepository.getFlightBySourceDestinationDepDate(sname, dname, date);
		return list;
	} 
}
