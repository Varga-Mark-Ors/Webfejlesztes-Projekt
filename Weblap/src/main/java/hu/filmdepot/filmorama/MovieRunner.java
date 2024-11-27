package hu.filmdepot.filmorama;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import hu.filmdepot.filmorama.model.Movie;
import hu.filmdepot.filmorama.repository.MovieRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.io.InputStream;
import java.util.List;

@Component
@AllArgsConstructor
@Order(1)
public class MovieRunner implements CommandLineRunner {

    private final MovieRepository movieRepository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        // Load JSON file
        try (InputStream is = getClass().getResourceAsStream("movies.json")) {
            if (is == null) {
                throw new IllegalArgumentException("movies.json not found in resources");
            }

            // Parse JSON into a list of Movie objects
            ObjectMapper mapper = new ObjectMapper();
            List<Movie> movies = mapper.readValue(is, new TypeReference<List<Movie>>() {});

            // Save each movie to the repository
            movies.stream()
                    .map(movieRepository::save)
                    .forEach(System.out::println);
        }
    }
}
