package hu.footballdepot.footballwiki.web;

import hu.footballdepot.footballwiki.model.Country;
import hu.footballdepot.footballwiki.model.Player;
import hu.footballdepot.footballwiki.model.Team;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
public interface TeamController {

    @GetMapping("/team")
    List<Team> findAll();

    @GetMapping("/team/search")
    List<Team> search(
            @NonNull @RequestParam Optional<String> teamId,
            @NonNull @RequestParam Optional<String> name,
            @NonNull @RequestParam Optional<Country> country
    );

    @GetMapping("/team/{teamId}")
    Team findOne(
            @PathVariable final String teamId
    );
}
