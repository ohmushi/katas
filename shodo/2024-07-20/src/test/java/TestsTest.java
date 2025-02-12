import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class TestsTest {
    @Test
    void should_assert_true() {
        assertThat(1).isEqualTo(1);
    }
}
