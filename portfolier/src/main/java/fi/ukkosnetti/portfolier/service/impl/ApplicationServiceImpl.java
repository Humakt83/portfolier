package fi.ukkosnetti.portfolier.service.impl;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import fi.ukkosnetti.portfolier.model.Application;
import fi.ukkosnetti.portfolier.service.ApplicationService;

@Component
public class ApplicationServiceImpl implements ApplicationService {

	@Override
	public List<Application> getApplications() {
		return Arrays.asList(new Application("test", null, null, null));
	}

}
