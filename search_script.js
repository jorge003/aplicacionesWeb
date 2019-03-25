$(document).ready(function(){
/*
	var min=1; 
    var max=4;  
    //document.write("Random Number Generated : " + random );

    var images = new Array();
	for (var i = 0; i < 4; i++) {
		images.push("panelSearch/img" + i + ".jpg");
	}

	function changeImage() {
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		document.getElementById("1-1").src = images[random];
		console.log(random);
		console.log(images[random]);
	}

	window.onload = function() {
		setInterval(function () {
	    changeImage();
		}, 3000);
	}

	var min=1; 
    var max=3; 
	var random = String(Math.floor(Math.random() * (+max - +min)) + +min);
	var x = document.getElementsByClassName("mySlides" + random); 
*/


	var myIndex = 0;

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

/*
	var y;

	function carousel() {
		//var i;
		var x = document.getElementsByClassName(y);
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		console.log(x.length);
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
		setTimeout(carousel, 3000);    
	}

	function carousel_0(){
		y = 'mySlides0';
		carousel();
	}

	function carousel_1(){
		y = 'mySlides1';
		carousel();
	}

	function carousel_2(){
		y = 'mySlides2';
		carousel();
	}

	function carousel_3(){
		y = 'mySlides3';
		carousel();
	}

	function carousel_4(){
		y = 'mySlides4';
		carousel();
	}

	function carousel_5(){
		y = 'mySlides5';
		carousel();
	}

	function carousel_6(){
		y = 'mySlides6';
		carousel();
	}

*/

/*

	for (var j = 0; j < 7; j++) {
		var k = j;
		y = 'mySlides' + k.toString();
		console.log(y);
		carousel();
	}
	
	j = 0;
	

	y = 'mySlides0';
	carousel();
	y = 'mySlides1';
	carousel();
	y = 'mySlides2';
	carousel();
	y = 'mySlides3';
	carousel();
	y = 'mySlides4';
	carousel();
	y = 'mySlides5';
	carousel();
	y = 'mySlides6';
	carousel();
	*/
	
	carousel_0();
	carousel_1();
	carousel_2();
	carousel_3();
	carousel_4();
	carousel_5();
	carousel_6();

});