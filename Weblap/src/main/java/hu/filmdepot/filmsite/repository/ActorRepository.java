package hu.filmdepot.filmsite.repository;

import hu.filmdepot.filmsite.model.Actor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActorRepository
        extends JpaRepository<Actor, String> {
}
