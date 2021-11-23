function btnHam(){
onOfSlideWrap();
} 

function closeSlideWrap(){
onOfSlideWrap();
}

function onOfSlideWrap(){
	var slideWrap = document.getElementById("slideWrap");
	var slideWrapStyle = getComputedStyle(slideWrap).visibility;
	
	if(slideWrapStyle == "hidden")
	{
		slideWrap.style.visibility = "visible";
		slideWrap.style.opacity = "1";
		slideWrap.style.width = "60%";
	}
	else
	{
		slideWrap.style.visibility = "hidden";
		slideWrap.style.opacity = "0";
		slideWrap.style.width = "0%";
	}
	
}