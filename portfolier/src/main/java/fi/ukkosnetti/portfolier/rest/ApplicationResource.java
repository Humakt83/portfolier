package fi.ukkosnetti.portfolier.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import fi.ukkosnetti.portfolier.model.Application;
import fi.ukkosnetti.portfolier.service.ApplicationService;

@Component
@Path("/application")
public class ApplicationResource {

	
	@Autowired
	private ApplicationService service;

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Application> getApplications() {
		return service.getApplications();
	}
}
