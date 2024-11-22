package hu.filmdepot.filmsite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jdk.jfr.Enabled;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Actor {
    @Id
    @EqualsAndHashCode.Include
    String idNumber;

    String name;
    String age;
    Boolean gender;

    double height;
    int netWorth;
}
