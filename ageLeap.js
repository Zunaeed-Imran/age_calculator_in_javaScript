var b_y = prompt("Enter your birth year Month & Date: ");

var birthDate = new Date(b_y);
var today = new Date();

var ageInMilliseconds = today.getTime() - birthDate.getTime();
var ageInDays = ageInMilliseconds / (1000 * 3600 * 24);

var isLeapYear = (birthDate.getFullYear() % 4 == 0 && birthDate.getFullYear() % 100 != 0) || birthDate.getFullYear() % 400 == 0;
if (isLeapYear) {
  ageInDays++;
}

var ageInYears = Math.floor(ageInDays / 365);
var ageInMonths = Math.floor((ageInDays % 365) / 30);
var ageInDaysLeft = Math.floor((ageInDays % 365) % 30);

document.write(ageInYears + " years, " + ageInMonths + " months " + ageInDaysLeft + " days.");
