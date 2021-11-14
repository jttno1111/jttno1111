function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

	window.localStorage.setItem('name', profile.getName());
	window.localStorage.setItem('email', profile.getEmail());
	window.localStorage.setItem('image',  profile.getImageUrl());
	window.location.href = 'Dashboard.html';


}



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
    });
}

