let timerDisplay=document.querySelector('.timerDisplay');
let stopBtn=document.getElementById('stopBtn');
let startBtn=document.getElementById('startBtn');
let resetBtn=document.getElementById('resetBtn');

let msec= 0; //let milli second
let secs= 0;// seconds
let mins=0;// & minutes 

let timerId=null;
startBtn.addEventListener('click', function(){
    if(timerId!==null){
      clearInterval(timerId);
    }
      timerId=  setInterval(startTimer,10); //10 millisecond
  });

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
  }
  
);
resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML=`00 : 00 : 00`;
    msec = 0;
    secs = 0;
    mins = 0;
  });
  
function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;

        }
    }

let msecString=msec<10 ? `0 ${msec}` : msec;
let secsString=secs<10 ? `0 ${secs}` : secs;
let minsString=mins<10 ? `0 ${mins}` : mins;

timerDisplay.innerHTML=`${minsString} : ${secsString} : ${ msecString}`;

}