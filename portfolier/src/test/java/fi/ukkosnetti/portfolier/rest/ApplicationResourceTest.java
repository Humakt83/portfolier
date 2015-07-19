package fi.ukkosnetti.portfolier.rest;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import fi.ukkosnetti.portfolier.PortfolierApplication;
import fi.ukkosnetti.portfolier.model.Application;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = PortfolierApplication.class)
@WebAppConfiguration
@IntegrationTest("server.port:0")
@DirtiesContext
public class ApplicationResourceTest {

	@Value("${local.server.port}")
	private int port;

	private String baseURL;

	@Before
	public void init() {
		baseURL = "http://localhost:" + this.port + "/application/";
	}

	@Test
	public void returnsListOfApplications() throws Exception {
		ResponseEntity<List<Application>> entity = new TestRestTemplate().exchange(baseURL + "all", HttpMethod.GET, null, new ParameterizedTypeReference<List<Application>>() {
		});
		assertEquals(HttpStatus.OK, entity.getStatusCode());
		assertEquals(1, entity.getBody().size());
	}

}
