var primaryRightBox = document.getElementById("primary-right-box"),
	primaryBoxdisplay = getComputedStyle(primaryRightBox).display,
	drpdwnbox = document.getElementById("actionToDrpDwn"),
	UpDelBox = document.getElementById("upAndDelFormBox"),
	AccCreateBox = document.getElementById("bookCreationBox");

function bookMngDrpDwn(){
var display = getComputedStyle(drpdwnbox).display;

	if(display == "none")
		drpdwnbox.style.display = "block";
	else
		drpdwnbox.style.display = "none";	
}



function updateNarchive(){

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

function addBookMan(){
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
		primaryRightBox.style.display = "none";
		drpdwnbox.style.right = "15%";
	
}

function LibrarianPanel(){
	window.location.href="admin_lib.html";
}
