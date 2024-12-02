package hu.footballdepot.footballwiki.web;

import hu.footballdepot.footballwiki.model.Country;
import hu.footballdepot.footballwiki.model.Player;
import hu.footballdepot.footballwiki.model.Team;
import hu.footballdepot.footballwiki.repository.TeamRepository;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class TeamService implements TeamController{

    private static final Logger LOGGER = LoggerFactory.getLogger(TeamService.class);

    private TeamRepository repository;

    @Override
    public List<Team> findAll() {
        LOGGER.info("Find all teams");
        return repository.findAll();
    }

    @Override
    public List<Team> search(@NonNull Optional<String> teamId, @NonNull Optional<String> name, @NonNull Optional<Country> country) {

        return repository.findAll()
                .stream()
                .filter(team -> teamId
                        .map(s -> team.getTeamId().contains(s))
                        .orElse(true))
                .filter(team -> name
                        .map(n -> team.getName().contains(n))
                        .orElse(true))
                .filter(team -> country
                        .map(c -> c == team.getCountry())
                        .orElse(true))
                .toList();
    }

    @Override
    public Team findOne(String teamId) {
        LOGGER.info("Find one team with id {}", teamId);
        return repository.findById(teamId)
                .orElseThrow(() -> new IllegalArgumentException("Team does not exist"));
    }
}
