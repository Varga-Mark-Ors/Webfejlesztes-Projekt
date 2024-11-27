package hu.footballdepot.footballwiki;

import hu.footballdepot.footballwiki.model.Contract;
import hu.footballdepot.footballwiki.repository.PlayerRepository;
import hu.footballdepot.footballwiki.repository.ContractRepository;
import hu.footballdepot.footballwiki.repository.TeamRepository;
import hu.footballdepot.footballwiki.util.ContractUtils;
import jakarta.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.util.Random;


@Order(2)
@Component
public class ContractRunner implements CommandLineRunner {

    private final PlayerRepository playerRepository;
    private final TeamRepository teamRepository;
    private final ContractRepository contractRepository;

    public ContractRunner(PlayerRepository playerRepository, TeamRepository teamRepository, ContractRepository contractRepository) {
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
        this.contractRepository = contractRepository;
    }

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        // 1. Lekérjük az összes játékost
        final var players = playerRepository.findAll();
        if (players.isEmpty()) {
            throw new IllegalStateException("No players found in the database.");
        }

        // 2. Lekérjük az összes csapatot
        final var teams = teamRepository.findAll();
        if (teams.isEmpty()) {
            throw new IllegalStateException("No teams found in the database.");
        }

        // 3. Játékosokhoz és csapatokhoz szerződések létrehozása
        final var contracts = players.stream()
                .map(player -> {
                    // Véletlenszerűen választunk egy csapatot
                    final var randomTeam = teams.get(new Random().nextInt(teams.size()));

                    // Szerződés létrehozása
                    return Contract.builder()
                            .player(player)
                            .team(randomTeam)
                            .salary(ContractUtils.nextContract())
                            .build();
                })
                .map(contractRepository::save) // Mentés az adatbázisba
                .toList();

        // 4. Kiírjuk az összes szerződést a konzolra
        contracts.forEach(System.out::println);
    }
}

