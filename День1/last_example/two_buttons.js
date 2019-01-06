let one = document.getElementById("one");
let two = document.getElementById("two");

one.onmouseover = showElement
one.onmouseout = hideElement

function showElement (){
	two.style.display = "block"
}

function hideElement (){
	two.style.display = "none"
}