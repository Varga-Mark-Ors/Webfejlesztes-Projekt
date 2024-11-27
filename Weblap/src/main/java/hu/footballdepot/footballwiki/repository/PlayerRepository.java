package hu.footballdepot.footballwiki.repository;

import hu.footballdepot.footballwiki.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository
        extends JpaRepository<Player, String> {
}
