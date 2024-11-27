package hu.footballdepot.footballwiki.repository;

import hu.footballdepot.footballwiki.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository
        extends JpaRepository<Team, String> {
}
