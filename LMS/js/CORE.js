var slideMenuBar = document.getElementById("slideMenuBar");
var slideMenuBarIco = document.getElementById("slideMenuBarIcon");

		

SlideNavManipulation();

function hamBtnIco(){
var slideMenuBarStyle = getComputedStyle(slideMenuBar).display;
var x = 0;
	if(slideMenuBarStyle == "block")
	{
		slideMenuBar.style.display = "none";
		slideMenuBarIco.style.display = "block";
		localStorage.setItem("SlideNav", "onic");
	}
	else
	{
		slideMenuBar.style.display = "block";
		slideMenuBarIco.style.display = "none";
		localStorage.setItem("SlideNav", "offic");
	}
}


function SlideNavManipulation(){
	if(localStorage.getItem("SlideNav")=== "onic")
	{
		slideMenuBar.style.display = "none";
		slideMenuBarIco.style.display = "block";
	}
	else
	{
		slideMenuBar.style.display = "block";
		slideMenuBarIco.style.display = "none";
	}
	
		document.getElementById("mngSubMenuBox").style.marginLeft = "17%";
		document.getElementById("srSubMenuBox").style.marginLeft = "17%";
		document.getElementById("mngSubMenuBoxIco").style.marginLeft = "6%";
		document.getElementById("srSubMenuBoxIco").style.marginLeft = "6%";
}







function GoToDashboard(){
	window.location.href="admin_dash.html";
}

function GoToLibrarians(){
	window.location.href="admin_lib.html";
}

function GoToMembers(){
	window.location.href="admin_mem.html";
}

function GoToBooks(){
	window.location.href="admin_book.html";
}

function GoToCurrentBorrowers(){
	alert("GoToCurrentBorrowers");
}

function GoToCurrentRented(){
	alert("GoToCurrentRented");
}

function GoToAuditTrails(){
	alert("GoToAuditTrails");
}

function Logout(){
	alert("LOGOUT");
}



