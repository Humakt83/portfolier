package fi.ukkosnetti.portfolier.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fi.ukkosnetti.portfolier.model.Application;

@Repository
public interface ApplicationRepository extends CrudRepository<Application, String> {
}
