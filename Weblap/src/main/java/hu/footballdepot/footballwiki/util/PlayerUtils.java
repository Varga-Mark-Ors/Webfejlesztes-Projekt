package hu.footballdepot.footballwiki.util;


import com.github.javafaker.Faker;
import hu.footballdepot.footballwiki.model.Country;
import hu.footballdepot.footballwiki.model.Player;
import hu.footballdepot.footballwiki.model.Position;
import lombok.NonNull;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class PlayerUtils {
    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String DIGITS = "0123456789";
    private static final Random RANDOM = new Random();
    private static final Faker FAKER;

    static {
        FAKER = new Faker();
    }

    public static String nextIdNumber(){
        return IntStream.range(0, 9)
                .mapToObj(pos -> pos == 0
                        ? LETTERS.charAt(RANDOM.nextInt(26))
                        : (LETTERS + DIGITS).charAt(RANDOM.nextInt(36)))
                .map(String::valueOf)
                .collect(Collectors.joining());
    }

    public static int nextAge(){
        return RANDOM.nextInt(16,40);
    }

    public static Boolean nextGender(){
        return RANDOM.nextBoolean();
    }

    public static Country nextCountry() {
        Country[] countries = Country.values();
        return countries[RANDOM.nextInt(countries.length)];
    }

    public static double nextHeight() {
        double rawHeight = ThreadLocalRandom.current().nextDouble(1.4, 2.2);
        return Math.round(rawHeight * 100.0) / 100.0;
    }

    public static int nextNetWorth(){
        return RANDOM.nextInt(100000, 1000000);
    }

    public static Position nextPosition() {
        Position[] positions = Position.values();
        return positions[RANDOM.nextInt(positions.length)];
    }

    public static Player nextPlayer(){
        return nextPlayer(nextIdNumber(),
                nextAge(),
                nextGender(),
                nextCountry(),
                nextHeight(),
                nextNetWorth(),
                nextPosition());
    }

    public static Player nextPlayer(
            @NonNull String idNumber,
            @NonNull int age,
            @NonNull Boolean gender,
            @NonNull Country country, // Az Enum típust használjuk itt
            @NonNull Double height,
            @NonNull int netWorth,
            @NonNull Position position) {

        final var name = FAKER.name();
        return Player.builder()
                .idNumber(idNumber)
                .name(name.firstName() + " " + name.lastName())
                .age(String.valueOf(age))
                .gender(gender)
                .country(country) // Az Enum értékét állítjuk be
                .height(height)
                .netWorth(netWorth)
                .position(position)
                .build();
    }

}
