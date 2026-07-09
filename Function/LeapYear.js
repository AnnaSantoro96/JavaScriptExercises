function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return "The year is leap";
    }

    return "The year is not leap";
}

console.log(isLeapYear(2000)); // The year is leap
console.log(isLeapYear(1900)); // The year is not leap
console.log(isLeapYear(2024)); // The year is leap
console.log(isLeapYear(2023)); // The year is not leap