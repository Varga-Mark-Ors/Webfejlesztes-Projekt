package hu.filmdepot.filmorama.repository;

import hu.filmdepot.filmorama.model.Cast;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CastRepository
        extends JpaRepository<Cast, UUID> {
}
