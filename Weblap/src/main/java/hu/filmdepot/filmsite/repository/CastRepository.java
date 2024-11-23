package hu.filmdepot.filmsite.repository;

import hu.filmdepot.filmsite.model.Cast;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CastRepository
        extends JpaRepository<Cast, UUID> {
}
