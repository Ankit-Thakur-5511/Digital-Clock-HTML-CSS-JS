let hr = document.getElementById("hour");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

function showTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

 ampm = h >= 12 ? 'PM' : 'AM';
    
  // Convert 24-hour format to 12-hour format
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  
  //Add leading zeros to hours, minutes, and seconds using if-else
if (h < 10) {
    h = "0" + h;
} else {
    h = h;
};

if (m < 10) {
    m = "0" + m;
} else {
    m = m;
};

if (s < 10) {
    s = "0" + s;
} else {
    s = s;
};

//Add leading zeros to hours, minutes, and seconds using Ternary Operator
// h = h < 10 ? "0" + h : h;
// m = m < 10 ? "0" + m : m;
// s = s < 10 ? "0" + s : s;

  hr.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  ampmElement.innerText = ampm;

  setTimeout(() => {
    showTime();
  }, 1000);
}

showTime();
