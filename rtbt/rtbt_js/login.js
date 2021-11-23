function lgnBtn(){
	window.location.href="Dashboard.html";
}

function loginBtnFrm(){
	$(".logReg").css("display", "none");
	$(".loginWrap").css("display", "block");
	$(".LoginFrm").css("height", "95%");
}

function CloseLgnFrm(){
	$(".LoginFrm").css("height", "0%");	
	$(".loginWrap").css("display", "none");
	$(".logReg").css("display", "block");
}


function regFrmBtn(){
	$(".logReg").css("display", "none");
	$(".RegWrap").css("display", "block");
	$(".RegFrm").css("height", "95%");
}

function CloseRegFrm(){
	$(".RegFrm").css("height", "0%");	
	$(".RegWrap").css("display", "none");
	$(".logReg").css("display", "block");
}

function regBtn(){
swal({
       title:"Registered",
       text: "Successfully",
	   icon: "success",
       buttons: {confirm: "Okay"}
	}).then( val => {if(val) {
							setTimeout(function() { CloseRegFrm(); }, 600);
							}
					});

}