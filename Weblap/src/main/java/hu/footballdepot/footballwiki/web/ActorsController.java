package hu.footballdepot.footballwiki.web;

import org.springframework.web.bind.annotation.GetMapping;
import hu.footballdepot.footballwiki.model.Player;

import java.util.List;

public interface ActorsController {

    @GetMapping("/actor")
    List<Player> findAll();
}
