package io.shodo.entretien;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.SortedMap;

public class Translator {
    String translate(String word) {
        Map<String, String> dictionary = new LinkedHashMap<>();
        dictionary.put("Ko", "こ");
        dictionary.put("n", "ん");
        dictionary.put("ni", "に");
        dictionary.put("chi", "ち");
        dictionary.put("wa", "わ");
        StringBuilder stringBuilder = new StringBuilder();
        for (String syllable : dictionary.keySet()) {
            if (word.startsWith(syllable)) {
                stringBuilder.append(dictionary.get(syllable));
                word = word.substring(syllable.length());
            }
        }

        return stringBuilder.toString();
    }
}
