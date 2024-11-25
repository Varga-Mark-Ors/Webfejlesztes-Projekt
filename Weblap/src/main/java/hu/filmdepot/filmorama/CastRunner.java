package hu.filmdepot.filmorama;

import hu.filmdepot.filmorama.model.Cast;
import hu.filmdepot.filmorama.repository.ActorRepository;
import hu.filmdepot.filmorama.repository.CastRepository;
import hu.filmdepot.filmorama.repository.MovieRepository;
import jakarta.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;

import java.util.stream.Stream;

@Order(2)
public class CastRunner
        implements CommandLineRunner {

    private ActorRepository actorRepository;
    private MovieRepository movieRepository;
    private CastRepository castRepository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        final var actor = actorRepository
                .findById("ACTOR1")
                .orElseThrow(() -> new IllegalArgumentException("Actor not found"));

        Stream.of("Dreamcatchers", "Comedy Royale", "Haunted Manor", "Whispers of the Sea")
                .map(code -> {
                    final var movie = movieRepository
                            .findById(code)
                            .orElseThrow(() -> new IllegalArgumentException("Movie not found"));
                    return Cast.builder()
                            .actor(actor)
                            .movie(movie)
                            .build();
                })
                .map(castRepository::save)
                .forEach(System.out::println);
    }
}
