package fi.ukkosnetti.portfolier.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import fi.ukkosnetti.portfolier.rest.AdminResource;
import fi.ukkosnetti.portfolier.rest.ApplicationResource;

@Component
public class JerseyConfig extends ResourceConfig {

	public JerseyConfig() {
		super();
		register(AdminResource.class);
		register(ApplicationResource.class);
	}
}
