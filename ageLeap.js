let b_y = prompt("Enter your Birth year, month, and day:");
let birthday = new Date(b_y);
let todayDate = new Date();

let milSec = todayDate.getTime() - birthday.getTime();
let ageDay = milSec / (1000 * 3600 * 24);

let leapYear = (birthday.getFullYear % 4 == 0 && birthday.getFullYear % 100 != 0 || birthday.getFullYear % 400 == 0);
if (leapYear) {
  ageDays++;
}

let agyear = Math.floor(ageDay / 365);
let agMonth = Math.floor((ageDay % 365) / 30);
let agday = Math.floor((ageDay % 365) % 30);

document.write(agyear + " Year " + agMonth + " Month " + agday + " Day");
