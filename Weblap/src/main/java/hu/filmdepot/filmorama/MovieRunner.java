package hu.filmdepot.filmorama;

import hu.filmdepot.filmorama.model.Genre;
import hu.filmdepot.filmorama.model.Movie;
import hu.filmdepot.filmorama.repository.MovieRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Objects;

@Component
@AllArgsConstructor
public class MovieRunner
        implements CommandLineRunner{

    private final MovieRepository movieRepository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        try(final var br = new BufferedReader(
                new InputStreamReader(
                        Objects.requireNonNull(getClass().getResourceAsStream("movies.tsv")))
        )) {
            br.lines()
                    .map(line -> {
                        final var tokens = line.split("\t");
                        return Movie.builder()
                                .movieId(tokens[0])
                                .title(tokens[1])
                                .rating(Integer.parseInt(tokens[2]))
                                .ageClassified(Integer.parseInt(tokens[3]))
                                .genre(Genre.valueOf(tokens[4]))
                                .build();
                    })
                    .map(movieRepository::save)
                    .forEach(System.out::println);
        }
    }
}
