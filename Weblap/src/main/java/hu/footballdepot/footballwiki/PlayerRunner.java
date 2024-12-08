package hu.footballdepot.footballwiki;

import hu.footballdepot.footballwiki.model.Country;
import hu.footballdepot.footballwiki.model.Position;
import hu.footballdepot.footballwiki.repository.PlayerRepository;
import hu.footballdepot.footballwiki.util.PlayerUtils;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@Order(1)
public class PlayerRunner
        implements CommandLineRunner {

    PlayerRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(PlayerUtils.nextPlayer(
                "RONALDO",
                40,
                Boolean.TRUE,
                Country.Portugal,
                1.9,
                10000000,
                Position.Forward
        ));
        for (int i = 0; i < 80; i++){
            repository.save(PlayerUtils.nextPlayer());
        }
    }
}
