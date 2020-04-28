console.log("This is working");

document.getElementById("unitMenu").addEventListener("click",openUnitMenu);
document.getElementById("transMenu").addEventListener("click",openTransMenu);
document.getElementById("urgMenu").addEventListener("click",openUrgMenu);
document.getElementById("calcButton").addEventListener("click", calculate);

function openUnitMenu(){
	document.getElementById("ddUnitMenu").classList.toggle("active");
}

function openTransMenu(){
	document.getElementById("ddTransMenu").classList.toggle("active");
}

function openUrgMenu(){
	document.getElementById("ddUrgMenu").classList.toggle("active");
}

function calculate(){
		var number = document.getElementById("textareaInput").value;
		console.log(number);
		document.getElementById("textareaOutput").value = number;
}
