package hu.filmdepot.filmorama.repository;

import hu.filmdepot.filmorama.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository
        extends JpaRepository<Movie, String> {
}
