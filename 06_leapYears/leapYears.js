const leapYears = function (year) {
  const yearDivByFour = year % 4 === 0;
  const century = year % 100 === 0;
  const yearDivByFourHundred = year % 400 === 0;

  if (yearDivByFour && (!century || yearDivByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
