document.getElementById("mybtn").addEventListener("click",mybmr);
function mybmr()
{
	let height=parseInt(document.getElementById("height").value);
	let wight=parseInt(document.getElementById("wight").value);
	let age=parseInt(document.getElementById("age").value);
	let h=13.397*height;
	let w=4.789*wight;
	let a=5.667*age;
	let x=88.362+h;
	let y=w-a;
	let bmr=x+y;
 var status="Good";
 if(bmr<1000)
 {
 	var status="bed";
 	document.getElementById("ans").style.color="yellow";
 }
 if(bmr>3000)
 {
 	var status="vary bad";
 	document.getElementById("ans").style.color="red";
 }
 document.getElementById("ans").innerHTML="Your <span style='color:green;'>BMR</span> is :"+bmr+"<br> it is "+" "+ status +" for you";
}