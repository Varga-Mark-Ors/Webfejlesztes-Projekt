package hu.filmdepot.filmorama.repository;

import hu.filmdepot.filmorama.model.Actor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActorRepository
        extends JpaRepository<Actor, String> {
}
