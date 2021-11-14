function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    $(".g-signin2").css("display", "none");
	$(".LoginWrap").css("display", "none");
	$(".DashboardWrap").css("display", "block");
	
	$(".data").css("display", "block");
	$("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $(".image").attr('src', profile.getImageUrl());

}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
		$(".LoginWrap").css("display", "block");
		$(".DashboardWrap").css("display", "none");
    });
}


function loginBtn(){
	$(".LoginWrap").css("display", "none");
	$(".DashboardWrap").css("display", "block");
}