function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
	window.localStorage.setItem('name', profile.getName());
	window.localStorage.setItem('email', profile.getEmail());
	window.localStorage.setItem('image',  profile.getImageUrl());
	$(".data").css("display", "block");
	$(".g-signin2").css("display", "none");
	window.location.href = 'landHere.html';
	
	
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
	$(".data").css("display", "none");
	$(".g-signin2").css("display", "block");
        alert("You have been signed out successfully");
    });
}
