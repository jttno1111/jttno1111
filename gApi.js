function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

	window.localStorage.setItem('name', profile.getName());
	window.localStorage.setItem('email', profile.getEmail());
	window.localStorage.setItem('image',  profile.getImageUrl());
	window.location.href = 'Dashboard.html';

   // $("#name").text(profile.getName());
   // $("#email").text(profile.getEmail());
  //  $("#image").attr('src', profile.getImageUrl());
}






