let optionclicked="star.png";
let w = 2;

$(function(){
  let totaltime = 120;
  let min = 0;
  let sec = 0;
  let counter = 0;
  let timer = setInterval(function (){
    counter++;
    if(counter==1)
    {
     let scoreElement = document.getElementById("score");
    if (scoreElement) {
   scoreElement.innerText = "❤️❤️";
    }
    }
    min = Math.floor((totaltime - counter) / 60);
    sec = totaltime - min * 60 - counter;
    //console.log("min="+min); console.log("sec="+sec);
    $(".timebox span").text(min + ":"+ sec);
    if(counter == totaltime)
    {
      alert("Time up . Press ok to restart the game");
      resultshow();
      clearInterval(timer);
    }
  },1000);
  
});

let i=2;
function checkanswer(option){
  if(optionclicked==$(option).attr('class'))
  {
    if(i==8)
    {
        $("#"+i+i).hide();
    $("#"+i).css("display", "");
    }
    $("#"+i+i).hide();
    $("#"+i).css("display", "");
    optionclicked =  $("#"+i).attr('class');
    i++;
    if(i==9)
    {
      alert("Bravo! You have emerged as the treasure hunter and winner! . Press Restart/Quit to restart the game");
      const audio2 = new Audio('hurray.mp3');
    audio2.play();
    }
  }
  else
  {
    w=w-1;
    if(w == 0)
    {
      alert("Oh no you have lost the treasure! . Press ok to restart the game");
     resultshow();
    }
    const audio = new Audio('ohno.mp3');
    audio.play();
    document.getElementById("score").innerText="❤️";
  }
}

function resultshow(){
  location.replace("index.html");
  return;
}