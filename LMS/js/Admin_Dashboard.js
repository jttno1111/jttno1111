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
var UpDelBox = document.getElementById("upAndDelFormBox");
var AccCreateBox = document.getElementById("accCreationBox");


	if(primaryBoxdisplay == "none"){
		primaryRightBox.style.display = "block";
		drpdwnbox.style.right = "33%";
		UpDelBox.style.display = "block";
		AccCreateBox.style.display = "none";
	}else{
		UpDelBox.style.display = "block";
		AccCreateBox.style.display = "none";
		
	}
	
	
	drpdwnbox.style.display = "none";
}



function addLibMan(){
var primaryRightBox = document.getElementById("primary-right-box");
var primaryBoxdisplay = getComputedStyle(primaryRightBox).display;
var drpdwnbox = document.getElementById("actionToDrpDwn");
var UpDelBox = document.getElementById("upAndDelFormBox");
var AccCreateBox = document.getElementById("accCreationBox");


	if(primaryBoxdisplay == "none"){
		primaryRightBox.style.display = "block";
		drpdwnbox.style.right = "33%";
		UpDelBox.style.display = "none";
		AccCreateBox.style.display = "block";
	}else{
		UpDelBox.style.display = "none";
		AccCreateBox.style.display = "block";
		
	}
	
	drpdwnbox.style.display = "none";
}







function closeRightBox(){
var primaryRightBox = document.getElementById("primary-right-box");
var drpdwnbox = document.getElementById("actionToDrpDwn");
		primaryRightBox.style.display = "none";
		drpdwnbox.style.right = "15%";
	
}