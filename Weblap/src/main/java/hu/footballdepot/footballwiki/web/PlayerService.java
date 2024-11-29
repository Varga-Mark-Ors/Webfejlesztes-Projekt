package hu.footballdepot.footballwiki.web;

import hu.footballdepot.footballwiki.model.Country;
import hu.footballdepot.footballwiki.model.Player;
import hu.footballdepot.footballwiki.repository.PlayerRepository;
import hu.footballdepot.footballwiki.util.PlayerUtils;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class PlayerService implements PlayerController{

    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(PlayerService.class);

    private PlayerRepository repository;

    @Override
    public List<Player> findAll() {
        LOGGER.info("findAll");
        return repository.findAll();
    }

    @Override
    public Player createOne(@NonNull Player player) {
        LOGGER.info("createOne({})", player);
        return repository.save(player
                .withIdNumber(PlayerUtils.nextIdNumber()));
    }

    @Override
    public void deleteOne(@NonNull String idNumber) {

        LOGGER.info("deleteOne({})", idNumber);
        repository.deleteById(idNumber);
    }

    @Override
    public List<Player> search(@NonNull Optional<String> idNumber,
                               @NonNull Optional<String> name,
                               @NonNull Optional<Country> country) {

        return repository.findAll()
                .stream()
                .filter(player -> idNumber
                        .map(s -> player.getIdNumber().contains(s))
                        .orElse(true))
                .filter(player -> name
                        .map(n -> player.getName().contains(n))
                        .orElse(true))
                .filter(player -> country
                        .map(c -> c == player.getCountry())
                        .orElse(true))
                .toList();
    }
}
