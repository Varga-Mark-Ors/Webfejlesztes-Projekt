package hu.filmdepot.filmorama.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Movie {

    @Id
    @EqualsAndHashCode.Include
    String movieId;

    String title;
    int rating;
    int ageClassified;
    Genre genre;
}
