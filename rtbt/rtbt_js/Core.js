var today = new Date();
var time = today. getHours() + ":" + today. getMinutes();
var date =(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

document.getElementById("currentTime").innerHTML = time;
document.getElementById("currentDate").innerHTML = date;

function gotoHome(){
	window.location.href="Dashboard.html";
}

function gotoVBuses(){
	window.location.href="ViewBuses.html";
}

function gotoCFriends(){
	window.location.href="CheckFriends.html";
}

function gotoFavBus(){
	window.location.href="FavBus.html";
}

function gotoNewsReport(){
	window.location.href="NewsReport.html";
}

function gotoNotif(){
	window.location.href="Notif.html";
}

