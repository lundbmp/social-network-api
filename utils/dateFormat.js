const addDateSuffix = (date) => {
  let dateStr = date.toString();

  // get last char of date string
  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (lastChar === "1" && dateStr !== "11") {
    dateStr = `${dateStr}st`;
  } else if (lastChar === "2" && dateStr !== "12") {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === "3" && dateStr !== "13") {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

function dateFormat(timestamp) {
  const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  const dateObj = new Date(timestamp);

  //formatting month, day, year
  const formattedMonth = months[dateObj.getMonth()];
  const dayOfMonth = addDateSuffix(dateObj.getDate());
  const year = dateObj.getFullYear();

  //converting to 12 hour day
  let hour =
    dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() - 12)
      : dateObj.getHours();

  if (hour === 0) {
    hour = 12;
  }

  //minute and time of day formatting
  const minutes = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();
  const periodOfDay = dateObj.getHours() >= 12 ? "pm" : "am";

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
}

console.log("testing " + dateFormat(Date.now()));

module.exports = dateFormat;