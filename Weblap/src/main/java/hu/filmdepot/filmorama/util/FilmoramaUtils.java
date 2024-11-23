package hu.filmdepot.filmorama.util;


import com.github.javafaker.Faker;
import hu.filmdepot.filmorama.model.Actor;
import lombok.NonNull;

import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class FilmoramaUtils {
    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String DIGITS = "0123456789";
    private static final Random RANDOM = new Random();
    private static final Faker FAKER = new Faker();

    public static String nextIdNumber(){
        return IntStream.range(0, 9)
                .mapToObj(pos -> pos == 0
                        ? LETTERS.charAt(RANDOM.nextInt(26))
                        : (LETTERS + DIGITS).charAt(RANDOM.nextInt(36)))
                .map(String::valueOf)
                .collect(Collectors.joining());
    }

    public static int nextAge(){
        return RANDOM.nextInt(90);
    }

    public static Boolean nextGender(){
        return RANDOM.nextBoolean();
    }

    public static double nextHeight(){
        return RANDOM.nextDouble(2.2);
    }

    public static int nextNetWorth(){
        return RANDOM.nextInt(100000, 1000000000);
    }

    public static Actor nextActor(){
        return nextActor(nextIdNumber(),
                nextAge(),
                nextGender(),
                nextHeight(),
                nextNetWorth());
    }

    public static Actor nextActor(
            @NonNull String idNumber,
            @NonNull int age,
            @NonNull Boolean gender,
            @NonNull Double height,
            @NonNull int netWorth){

        final var name = FAKER.name();
        return Actor.builder()
                .idNumber(idNumber)
                .name(name.firstName() + " " + name.lastName())
                .age(String.valueOf(age))
                .gender(gender)
                .height(height)
                .netWorth(netWorth)
                .build();
    }
}
