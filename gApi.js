function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
	
	
	setTimeout(function(){
    window.location.href = 'Dashboard.html';
    }, 5000);
}






