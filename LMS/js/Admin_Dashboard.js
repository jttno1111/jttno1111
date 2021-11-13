function LibMngDrpDwn(){
var action = document.getElementById("actionToDrpDwn");
var display = getComputedStyle(action).display;

	if(display == "none")
		action.style.display = "block";
	else
		action.style.display = "none";	
}

function updateNarchive(){
var primaryRightBox = document.getElementById("primary-right-box");
var primaryBoxdisplay = getComputedStyle(primaryRightBox).display;
var drpdwnbox = document.getElementById("actionToDrpDwn");
var margin = getComputedStyle(drpdwnbox).margin;

	if(primaryBoxdisplay == "none"){
		primaryRightBox.style.display = "block";
		drpdwnbox.style.right = "33%";
	}
	drpdwnbox.style.display = "none";
}

function closeRightBox(){
var primaryRightBox = document.getElementById("primary-right-box");
var drpdwnbox = document.getElementById("actionToDrpDwn");
		primaryRightBox.style.display = "none";
		drpdwnbox.style.right = "15%";
	
}