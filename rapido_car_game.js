
m=0;
var y;
function start()
{ 
    y=setInterval(run,100);
    function run()
    {
	   if(m==1070)
	   {
	   	clearInterval(y);
	   	m=0;
	   }
	   else{
	   	 m+=5;
	     var x = document.getElementById("img");
	     x.style.marginLeft=m+'px';
	   }
    }
}

function stop()
{
   clearInterval(y)
}


var audio=document.getElementById("audio");
var play=document.getElementById("play");
var count=0;
function sound()
{
  	if(count==0){
  		count=1;
  		audio.play();
  		play.innerHTML="pause";
  	}
  	else{
  		count=0;
  		audio.pause();
  		play.innerHTML="pause";
  	}
}








