package hu.footballdepot.footballwiki.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@With
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Team {

    @Id
    @EqualsAndHashCode.Include
    String teamId;

    String name;
    String foundationDate;
    Country country;
    String city;
    League league;
}
