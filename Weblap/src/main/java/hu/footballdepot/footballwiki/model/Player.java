package hu.footballdepot.footballwiki.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Data
@With
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Player {
    @Id
    @EqualsAndHashCode.Include
    String idNumber;

    String name;
    String age;
    Boolean gender;
    Country country;
    double height;
    int netWorth;
    Position position;
}
