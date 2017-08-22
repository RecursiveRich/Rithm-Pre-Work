document.addEventListener("DOMContentLoaded", function() {
	
	document.querySelector("#change_heading").innerText = "Hello World";

	var displayColor = document.querySelector(".selected");
	var section = document.querySelector('section');

	section.addEventListener('mouseover', function(e) {
		displayColor.innerText = e.target.getAttribute("class");
	})

	var div = document.createElement("div");
	div.classList.add("purple");
	div.style.backgroundColor = "purple";
	section.appendChild(div);

})

// Rithm Solution: 
// window.onload = function(){
//     var el = document.getElementById("change_heading");
//     el.innerText = "Hello world!";

//     var section = document.querySelector("section")
//     section.addEventListener("mouseover", function(event){
//         var selectedColor = document.querySelector('.selected');
//         selectedColor.innerText = event.target.className;
//     })

