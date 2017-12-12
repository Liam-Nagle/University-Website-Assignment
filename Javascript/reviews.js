var x;

document.getElementsByClassName("reviewimg").addEventListener("mouseover", showText);
document.getElementsByClassName("reviewimg").addEventListener("mouseout", hideText);

function showText(text) {
	var x = document.getElementsByClassName("desc").innerHTML;
	document.getElementsByClassName("desc").innerHTML=text;
}
function hideText() {
	document.getElementsByClassName("desc).innerHTML=x;
}