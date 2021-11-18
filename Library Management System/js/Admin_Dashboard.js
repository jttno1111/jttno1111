var primaryRightBox = document.getElementById("primary-right-box");
var drpdwnbox = document.getElementById("actionToDrpDwn");
var UpDelBox = document.getElementById("upAndDelFormBox");
var AccCreateBox = document.getElementById("accCreationBox");




function LibMngDrpDwn(){
var drpdwnboxStyle = getComputedStyle(drpdwnbox).display;
	if(drpdwnboxStyle == "none")
		drpdwnbox.style.display = "block";
	else
		drpdwnbox.style.display = "none";	
}

function updateNarchive(){
var primaryBoxdisplay = getComputedStyle(primaryRightBox).display;


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
var primaryBoxdisplay = getComputedStyle(primaryRightBox).display;

	if(primaryBoxdisplay == "none"){
		primaryRightBox.style.display = "block";
		drpdwnbox.style.right = "32%";
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
		drpdwnbox.style.right = "31%";
}


function bookListPanel(){
	window.location.href="book_list_panel.html";
}



function hamBtnIco(){

}


