package hu.filmdepot.filmorama.web;

import org.springframework.web.bind.annotation.GetMapping;
import hu.filmdepot.filmorama.model.Actor;

import java.util.List;

public interface ActorsController {

    @GetMapping("/actor")
    List<Actor> findAll();
}
