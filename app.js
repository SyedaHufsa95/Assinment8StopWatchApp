var base;
var playPause= 0;
function playFunc(){
    
    playPause = playPause + 1;
    
    if(playPause === 1){

        play();
        document.getElementById("play").classList.add("pause");
        $("#animateCircle").addClass("addAnimation");
        $("#animateCircle.addAnimation").css("animation-play-state","running");
     }
    else  if(playPause === 2){
        document.getElementById("play").classList.remove("pause");
        $("#animateCircle").css("animation-play-state","paused");
        playPause=0;
        stop();
    }
}


function play(){
    base = setInterval(timer,10);
}

function stop(){
    clearInterval(base);
}




var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var msecVal = document.getElementById("msec");
var secVal = document.getElementById("sec");
var minVal = document.getElementById("min");
var hourVal = document.getElementById("hour");



function timer(){
    msecVal = updateTime(msec);
    secVal = updateTime(sec);
    minVal = updateTime(min);
    hourVal = updateTime(hour);


    msec++

    msecVal.innerHTML=msec;

    if(msec >= 100){
                sec++
                secVal.innerHTML = sec
                msec = 0;
    }
    else if(sec >= 60){
                min++
                minVal.innerHTML = min
               sec = 0;
           }
    else if(min >= 60){
        
        hour++
        hourVal.innerHTML= hour
        min = 0;
       }


    $("#msec").text(msecVal);
    $("#sec").text(secVal);
    $("#min").text(minVal);
    $("#hour").text(hourVal);


    
}

function updateTime(i){
if( i < 10){
    j = "0"+i
    return j
}
else if(i >= 10){
    return i++
}
}


function resetFunc(){
    
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;

    $("#msec").text("00");
    $("#sec").text("00");
    $("#min").text("00");
    $("#hour").text("00");


    if(!$("play").hasClass("pause")){
        $("#animateCircle").removeClass("addAnimation");
    }
    else{
        $("#animateCircle").removeClass("addAnimation");
        setTimeout(function(){
            $("animateCircle").addClass("addAnimation")
        },10)
    }

}

function stopFunc(){
    clearInterval(base);
    resetFunc();


    if(!$("play").hasClass("pause")){
        $("#animateCircle").removeClass("addAnimation");
    }
    else{
        $("#animateCircle").removeClass("addAnimation");
        setTimeout(function(){
            $("animateCircle").addClass("addAnimation")
        },10)
    }

}









































// var hour=0;
// var min =0;
// var sec =0;
// var msec =0;
// var hourHeading = document.getElementById("hour");
// var minHeading = document.getElementById("min");
// var secHeading = document.getElementById("sec");
// var msecHeading = document.getElementById("msec");

// var interval;

// function timer(){
//     msec++
//     msecHeading.innerHTML=msec;

//     if(msec >=100){
//         sec++
//         secHeading.innerHTML=sec;
//         msec=0;
//     }
//     else if(sec >=60){
//         min++
//         minHeading.innerHTML=min;
//         sec=0;
//     }
//     else if(min >= 60){
//         hour++
//         hourHeading.innerHTML= hour;
//         min=0;
//     }

// }




// function playFunc(){
//     interval = setInterval(timer,10)
// }

// function stopFunc(){
//    clearInterval(interval)
//    resetFunc();
// }
// function resetFunc(){
//     hour=0;
//     min = 0;
//     sec = 0;
//     msec = 0;
    

//     hourHeading.innerHTML=hour;
//     minHeading.innerHTML=min;
//     secHeading.innerHTML=sec;
//     msecHeading.innerHTML=msec;

    
// }
