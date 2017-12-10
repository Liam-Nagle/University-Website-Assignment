var slideIndex = 0;
slider()

//W3schools Slider javascript https://www.w3schools.com/w3css/w3css_slideshow.asp

function slider() {
	var i;
	var x = document.getElementsByClassName("slides"); //Gets images from the HTML class
	for (i = 0; i < x.length; i++) { //Rotates round the images and forces them to not display
		x[i].style.display = "none";
	}
	slideIndex++
	if (slideIndex > x.length) {slideIndex = 1} //checks if the slideindex is larger than the max amount of images and if so resets back to the first (1)
	x[slideIndex-1].style.display = "block"; //Displays the image when the image slideIndex is reached
	setTimeout(slider, 10000); //Changes the slide every 4 seconds
}