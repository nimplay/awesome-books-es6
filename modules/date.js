// Clock

export default function currentTime() {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  let month = date.getMonth();
  let week = date.getDay();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';
  // week
  if (week === 0) {
    week = 'Sun';
  } else if (week === 1) {
    week = 'Mon';
  } else if (week === 2) {
    week = 'Tue';
  } else if (week === 3) {
    week = 'Wed';
  } else if (week === 4) {
    week = 'Thu';
  } else if (week === 5) {
    week = 'Fry';
  } else if (week === 6) {
    week = 'Sat';
  }

  // Month
  if (month === 0) {
    month = 'Jun.';
  } else if (month === 1) {
    month = 'Feb.';
  } else if (month === 2) {
    month = 'Mar.';
  } else if (month === 3) {
    month = 'Apr.';
  } else if (month === 4) {
    month = 'May.';
  } else if (month === 5) {
    month = 'Jun.';
  } else if (month === 6) {
    month = 'Jul.';
  } else if (month === 7) {
    month = 'Aug.';
  } else if (month === 8) {
    month = 'Sep.';
  } else if (month === 9) {
    month = 'Oct.';
  } else if (month === 10) {
    month = 'Nov.';
  } else if (month === 11) {
    month = 'Dec.';
  }
  // Hour
  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh -= 12;
    session = 'PM';
  }

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  const time = `Date: ${week}. ${month} ${day}, ${year}. Time ${hh}:${mm}:${ss} ${session}`;

  document.getElementById('clock').innerText = `${time}`;
  setTimeout(() => {
    currentTime();
  }, 1000);
}
