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
	
/*
	var min=1; 
    var max=3; 
	var random = String(Math.floor(Math.random() * (+max - +min)) + +min);


	function carousel_0() {
		//var i;
		var x = document.getElementsByClassName("mySlides0");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel_0, 3000);    
	}

	function carousel_1() {
		//var i;
		var x = document.getElementsByClassName("mySlides1");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel_1, 4000);    
	}

	function carousel_2() {
		//var i;
		var x = document.getElementsByClassName("mySlides2");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel_2, 5000);    
	}

	function carousel_3() {
		//var i;
		var x = document.getElementsByClassName("mySlides3");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel_3, 3000);    
	}

	function carousel_4() {
		//var i;
		var x = document.getElementsByClassName("mySlides4");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel_4, 5000);    
	}

	function carousel_5() {
		//var i;
		var x = document.getElementsByClassName("mySlides5");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel_5, 4000);    
	}

	function carousel_6() {
		//var i;
		var x = document.getElementsByClassName("mySlides6");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel_6, 3000);    
	}

	carousel_0();
	carousel_1();
	carousel_2();
	carousel_3();
	carousel_4();
	carousel_5();
	carousel_6();
*/
});