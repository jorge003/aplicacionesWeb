$(document).ready(function(){

	var myIndex = 0;
	
	function carousel(slides) {
		var x = document.getElementsByClassName(slides);
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		//console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(function(){carousel(slides)}, 3000);    
	}

	carousel('mySlides0');
	carousel('mySlides1');
	carousel('mySlides2');
	carousel('mySlides3');
	carousel('mySlides4');
	carousel('mySlides5');
	carousel('mySlides6');
	
});