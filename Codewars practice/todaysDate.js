function isToday(date) {
  let todayDate = new Date();
  let yesterday = new Date() - todayDate;
  let tomorrow = new Date() + todayDate;
  if (todayDate === date) {
    return true;
  } else if (todayDate === yesterday) {
    return false;
  } else if (todayDate === tomorrow) {
    return false;
  }

  return false;
}

// other attempt
function isToday(date) {
  var today = new Date();
  return date.toDateString() == today.toDateString();
}
