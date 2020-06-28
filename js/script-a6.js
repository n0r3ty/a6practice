function move () {


let barProgress = 0;

$('#btn1').click(function(){
  barProgress = barProgress + 1;

$('#percentBar').attr("style", "width: " + barProgress + "%");
});

$('#btn2').click(function(){
  barProgress = barProgress + 3;

$('#percentBar').attr("style", "width: " + barProgress + "%");
});

$('#btn3').click(function(){
  barProgress = barProgress + 7;

$('#percentBar').attr("style", "width: " + barProgress + "%");
});

$('#btn4').click(function(){
  barProgress = barProgress * 0;

$('#percentBar').attr("style", "width: " + barProgress + "%");
});

}

$(document).ready(move);
