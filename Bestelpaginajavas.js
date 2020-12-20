// JavaScript Document
"use strict";
function AddItem(txt) {
  var option = document.createElement("option");
            option.text = txt.value;
            option.value = txt.value;
            document.getElementById("Thema").options.add(option);
}
function controleer(){

	let naam = document.getElementById("Yourname").value;
	let email = document.getElementById("email").value;
	let tel = document.getElementById("tel").value;
	
	if (naam == "")
	{
		document.getElementById("uitvoer").innerHTML = "Geen naam ingevuld";
	}else if(email == "")
	 {
			 document.getElementById("uitvoer").innerHTML = "Geen E-mail ingevuld";
	} else if(tel == "")
	 {
			 document.getElementById("uitvoer").innerHTML = "Geen telefoonnummer ingevuld";
	} else{
		document.getElementById("knop").innerHTML =
			alert("Het is verzonden. U krijgt over een paar seconden een bevestiging")
	}
}