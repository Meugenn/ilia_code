let changer = document.getElementById("changer");
let divs = document.getElementsByTagName("div");

changer.onclick = colorChanger ;


function colorChanger(){
	for (var i = 0; i < divs.length; i++) {
		if (divs[i].style.color === "black"){
			divs[i].style.color = "red"
		}else if (divs[i].style.color === "red"){
			divs[i].style.color = "black"
		}else{
			divs[i].style.color = "black"
		}
	}
}

