package hu.footballdepot.footballwiki;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import hu.footballdepot.footballwiki.model.Team;
import hu.footballdepot.footballwiki.repository.TeamRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.io.InputStream;
import java.util.List;

@Component
@AllArgsConstructor
@Order(1)
public class TeamRunner implements CommandLineRunner {

    private final TeamRepository teamRepository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        // Load JSON file
        try (InputStream is = getClass().getResourceAsStream("teams.json")) {
            if (is == null) {
                throw new IllegalArgumentException("teams.json not found in resources");
            }

            // Parse JSON into a list of Movie objects
            ObjectMapper mapper = new ObjectMapper();
            List<Team> teams = mapper.readValue(is, new TypeReference<List<Team>>() {});

            // Save each movie to the repository
            teams.stream()
                    .map(teamRepository::save)
                    .forEach(System.out::println);
        }
    }
}
