package hu.footballdepot.footballwiki.util;

import hu.footballdepot.footballwiki.model.Team;

import java.util.Random;

public class ContractUtils {

    private static final Random RANDOM = new Random();

    public static int nextContract(){
        return RANDOM.nextInt(1000,10000);
    }
}
