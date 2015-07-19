package fi.ukkosnetti.portfolier.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "translation")
public class Application {

	public enum ApplicationType {
		GAME, DESKTOP, WEBAPPLICATION, WEBPAGE
	}

	@Id
	public final String name;

	public final String description;

	public final Date when;

	public final Set<ApplicationType> types;

	public Application(String name, String description, Date when, Set<ApplicationType> types) {
		this.name = name;
		this.description = description;
		this.when = when;
		this.types = types;
	}

	@SuppressWarnings("unused")
	private Application() {
		this(null, null, null, null);
	}

	@Override
	public String toString() {
		return "Application [name=" + name + ", description=" + description + ", when=" + when + ", types=" + types + "]";
	}

}
