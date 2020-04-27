console.log("This is working");

document.getElementById("unitMenu").addEventListener("click",openUnitMenu);
document.getElementById("transMenu").addEventListener("click",openTransMenu);
document.getElementById("urgMenu").addEventListener("click",openUrgMenu);

function openUnitMenu(){
	document.getElementById("ddUnitMenu").classList.toggle("active");
}

function openTransMenu(){
	document.getElementById("ddTransMenu").classList.toggle("active");
}

function openUrgMenu(){
	document.getElementById("ddUrgMenu").classList.toggle("active");
}
