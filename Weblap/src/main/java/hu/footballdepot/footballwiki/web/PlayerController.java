package hu.footballdepot.footballwiki.web;

import hu.footballdepot.footballwiki.model.Country;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;
import hu.footballdepot.footballwiki.model.Player;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
public interface PlayerController {

    @GetMapping("/player")
    List<Player> findAll();

    @PostMapping ("/player/add")
    Player createOne(
            @NonNull @RequestBody Player player
    );

    @PutMapping ("/player/update")
    Player updateOne(
            @NonNull @RequestBody Player player
    );

    @DeleteMapping("/player/{idNumber}")
    void deleteOne(
            @NonNull @PathVariable String idNumber
    );

    @GetMapping("/player/search")
    List<Player> search(
            @NonNull @RequestParam Optional<String> idNumber,
            @NonNull @RequestParam Optional<String> name,
            @NonNull @RequestParam Optional<Country> country
    );

    @GetMapping("/player/{idNumber}")
    Player findOne(
            @NonNull @PathVariable String idNumber
    );
}
