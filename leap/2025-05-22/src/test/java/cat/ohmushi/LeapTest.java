package cat.ohmushi;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class LeapTest {
    @Test
    void year_divisible_by_400_shoud_be_leap() {
        assertThat(Leap.isLeapYear(400)).isTrue();
        assertThat(Leap.isLeapYear(800)).isTrue();
        assertThat(Leap.isLeapYear(2000)).isTrue();
    }

    @Test
    void year_divisible_by_100_but_not_by_400_shoud_not_be_leap() {
        assertThat(Leap.isLeapYear(1700)).isFalse();
        assertThat(Leap.isLeapYear(1800)).isFalse();
        assertThat(Leap.isLeapYear(1900)).isFalse();
        assertThat(Leap.isLeapYear(2100)).isFalse();
    }

    @Test
    void year_divisible_by_4_but_not_100_should_be_leap() {
        assertThat(Leap.isLeapYear(2008)).isTrue();
        assertThat(Leap.isLeapYear(2012)).isTrue();
        assertThat(Leap.isLeapYear(2016)).isTrue();
    }

    @Test
    void year_not_divisible_by_4_should_not_be_leap() {
        assertThat(Leap.isLeapYear(2007)).isFalse();
        assertThat(Leap.isLeapYear(2018)).isFalse();
        assertThat(Leap.isLeapYear(2019)).isFalse();
    }
}
