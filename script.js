const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");



const newyears = "1 jan 2022";

function countdown(){
 const  NewYearDate = new Date(newyears);
 const  CurrentDate = new Date();
 const totalseconds = (NewYearDate-CurrentDate)/1000;
 const days = Math.floor(totalseconds/3600/24);
 const hours = Math.floor(totalseconds/3600)%24;
 const minutes = Math.floor(totalseconds/60)%60;
 const seconds = Math.floor(totalseconds)%60;
 console.log(days,hours,minutes,seconds);
 daysEL.innerHTML=days;
 hoursEL.innerHTML=formattime(hours);
 minutesEL.innerHTML=formattime(minutes);
 secondsEL.innerHTML=formattime(seconds);

}
function formattime(time){
    return time<10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);

