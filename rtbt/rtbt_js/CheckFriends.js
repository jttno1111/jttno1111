function openTwfTab(){
	switchTab("twfTab");
}

function openFfTab(){
	switchTab("ffTab");
}


function addTrpFrnd(){
twfPopBox("open");
}


function closePopUpBox(){
twfPopBox("close");
}


function switchTab(ctrl){
	var twfTab = document.getElementById("twfBox");
	var ffTab = document.getElementById("ffBox");
	var ffTabStyle = getComputedStyle(ffTab).display;
	var twfTabStyle = getComputedStyle(twfTab).display;	

	

	if(ctrl == "twfTab"){
		if(twfTabStyle == "none"){
			twfTab.style.display = "block";
			ffTab.style.display = "none";
			document.getElementById("twfBtn").style.borderBottomColor = "darkgreen";
			document.getElementById("ffBtn").style.borderBottomColor = "#34A853";
		}
		
	}else{
		if(ffTabStyle == "none"){
			ffTab.style.display = "block";
			twfTab.style.display = "none";
			document.getElementById("twfBtn").style.borderBottomColor = "#34A853";
			document.getElementById("ffBtn").style.borderBottomColor = "darkgreen";
		}
	}
}




function twfPopBox(ctrl){
	
	if(ctrl == "open"){
		document.getElementById("boxBlocker").style.visibility = "visible";
		document.getElementById("popUpTWFBox").style.visibility = "visible";
		document.getElementById("popUpTWFBox").style.opacity = "1";
	}else{

		document.getElementById("boxBlocker").style.visibility = "hidden";
		document.getElementById("popUpTWFBox").style.visibility = "hidden";
		document.getElementById("popUpTWFBox").style.opacity = "0";
	}
	
}


function fndFrnds(){
	document.getElementById("overflowBox").style.height = "60vh";
}
function exitOverflow(){
	document.getElementById("overflowBox").style.height = "0vh";
}

