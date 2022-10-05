package com.myflightapp.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Passenger {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String source;
	private String destination;
	private LocalDate depDate;

	@ManyToOne
	private Vendor vendor; 

	public Passenger(Long id, String name, String source, String destination, LocalDate depDate, Vendor vendor) {
		super();
		this.id = id;
		this.name = name;
		this.source = source;
		this.destination = destination;
		this.depDate = depDate;
		this.vendor = vendor;
	}

	public Passenger() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public LocalDate getDepDate() {
		return depDate;
	}

	public void setDepDate(LocalDate depDate) {
		this.depDate = depDate;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	@Override
	public String toString() {
		return "Passenger [id=" + id + ", name=" + name + ", source=" + source + ", destination=" + destination
				+ ", depDate=" + depDate + ", vendor=" + vendor + "]";
	}

}
