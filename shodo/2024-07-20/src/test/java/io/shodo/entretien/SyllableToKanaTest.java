package io.shodo.entretien;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class SyllableToKanaTest {
    @Test
    void shouldGetKoInKana() {
        var translator = new Translator();
        assertThat(translator.translate("Ko")).isEqualTo("こ");
    }

    @Test
    void shouldGetNiInKana() {
        var translator = new Translator();
        assertThat(translator.translate("n")).isEqualTo("ん");
    }

    @Test
    void shouldGetKoniInKana() {
        var translator = new Translator();
        assertThat(translator.translate("Kon")).isEqualTo("こん");
    }

    @Test
    void shouldGetKonnichuaInKana() {
        var translator = new Translator();
        assertThat(translator.translate("Konnichiwa")).isEqualTo("こんにちわ");
    }
}
