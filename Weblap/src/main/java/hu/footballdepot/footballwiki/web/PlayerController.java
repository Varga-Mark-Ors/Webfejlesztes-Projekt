package hu.footballdepot.footballwiki.web;

import hu.footballdepot.footballwiki.model.Country;
import lombok.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import hu.footballdepot.footballwiki.model.Player;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

public interface PlayerController {

    @GetMapping("/player")
    List<Player> findAll();

    @GetMapping("/player/add")
    Player createOne(
            @NonNull @RequestBody Player player
    );

    @GetMapping("/player/{idNumber}")
    void deleteOne(
            @NonNull @PathVariable String idNumber
    );

    @GetMapping("/player/search")
    List<Player> search(
            @NonNull @RequestParam Optional<String> idNumber,
            @NonNull @RequestParam Optional<String> name,
            @NonNull @RequestParam Optional<Country> country
    );
}
