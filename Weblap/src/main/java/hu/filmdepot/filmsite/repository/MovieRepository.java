package hu.filmdepot.filmsite.repository;

import hu.filmdepot.filmsite.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository
        extends JpaRepository<Movie, String> {
}
