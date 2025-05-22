package cat.ohmushi;

public class Leap {
    public static Boolean isLeapYear(int year) {
        return divisibleBy400(year) || divisibleBy4ButNotBy100(year);
    }

    private static boolean divisibleBy4ButNotBy100(int year) {
        return (year % 4 == 0) && (year % 100 != 0);
    }

    private static boolean divisibleBy400(int year) {
        return year % 400 == 0;
    }
}