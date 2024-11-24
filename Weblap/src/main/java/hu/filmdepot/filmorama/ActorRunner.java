package hu.filmdepot.filmorama;

import hu.filmdepot.filmorama.repository.ActorRepository;
import hu.filmdepot.filmorama.util.FilmoramaUtils;
import org.springframework.boot.CommandLineRunner;

public class ActorRunner
        implements CommandLineRunner {

    ActorRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(FilmoramaUtils.nextActor(
                "ACTOR1", 56, Boolean.TRUE,2.0, 1000000));
        for (int i = 0; i < 20; i++){
            repository.save(FilmoramaUtils.nextActor());
        }
    }
}
