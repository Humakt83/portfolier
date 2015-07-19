package fi.ukkosnetti.portfolier.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Component;

@Component
@Path("/admin")
public class AdminResource {

	@GET
	@Path("/ping")
	@Produces(MediaType.TEXT_PLAIN)
	public String isAlive() {
		return "pong";
	}
}
