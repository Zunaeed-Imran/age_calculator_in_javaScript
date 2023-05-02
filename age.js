var b_y = prompt("Enter your birth year: ");
var b_m = prompt("Enter your birth month: ");
var b_d = prompt("Enter your birth day: ");

var birthDate = new Date(b_y, b_m - 1, b_d);
var today = new Date();

var ageInMilliseconds = today.getTime() - birthDate.getTime();
var ageInDays = ageInMilliseconds / (1000 * 3600 * 24);

var ageInYears = Math.floor(ageInDays / 365);
var ageInMonths = Math.floor((ageInDays % 365) / 30);
var ageInDaysLeft = Math.floor((ageInDays % 365) % 30);

document.write(ageInYears + " years, " + ageInMonths + " months " + ageInDaysLeft + " days.");


