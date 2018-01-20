package com.cazares.miguel.user_post.util;

/**
 * Created by Miguel Cazares on 1/20/18.
 */

public class StringUtil {
    public static String camelCaseToDashCase(String str) {
        String regex = "([a-z])([A-Z]+)";
        String replacement = "$1-$2";
        return str.replaceAll(regex, replacement).toLowerCase();
    }
}
