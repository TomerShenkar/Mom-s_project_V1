console.log("This is working");

document.getElementById("buttonCalc").addEventListener("click", calcuFun);
document.getElementById("buttonPlus").addEventListener("click", addLine);
	
function calcuFun(){

	var unitselection = document.getElementById("chosenunit").value;
	var transselection = document.getElementById("chosentrans").value;
	var urgselection = document.getElementById("chosenurg").value;
	var taInput = document.getElementById("taIn").value;
	
	var isnum = /^\d+$/.test(taInput);
	//console.log(isnum);
	if(isnum===false){
		console.log("Breaked at isnum");
		document.getElementById("taOut").value = "Not happening";
	}
	
	if(unitselection==="Units"){
		if(transselection==="Associate"){
			if(urgselection==="Non-Urgent"){
				document.getElementById("taOut").value = taInput*132;
			}
			if(urgselection==="Semi-Urgent"){
				document.getElementById("taOut").value = taInput*154;

			}
			if(urgselection==="Urgent"){
				document.getElementById("taOut").value = taInput*179;

			}
			if(urgselection==="Panic"){
				document.getElementById("taOut").value = taInput*220;
			}
		}
		if(transselection==="Senior"){
			if(urgselection==="Non-Urgent"){
				document.getElementById("taOut").value = taInput*154;
			}
			if(urgselection==="Semi-Urgent"){
				document.getElementById("taOut").value = taInput*176;
			}
			if(urgselection==="Urgent"){
				document.getElementById("taOut").value = taInput*198;
			}
			if(urgselection==="Panic"){
				document.getElementById("taOut").value = taInput*248;
			}
		}
		else if(transselection==="Naomi"){
			if(urgselection==="Non-Urgent"){
				document.getElementById("taOut").value = taInput*176;
			}
			if(urgselection==="Semi-Urgent"){
				document.getElementById("taOut").value = taInput*19;
			}
			if(urgselection==="Urgent"){
				document.getElementById("taOut").value = taInput*220;
			}
			if(urgselection==="Panic"){
				document.getElementById("taOut").value = taInput*275;
			}
		}
	}
	
	else{
		if(transselection==="Associate"){
			if(urgselection==="Non-Urgent"){
				document.getElementById("taOut").value = taInput*308;
			}
			if(urgselection==="Semi-Urgent"){
				document.getElementById("taOut").value = taInput*352;
			}
			if(urgselection==="Urgent"){
				document.getElementById("taOut").value = taInput*396;
			}
			if(urgselection==="Panic"){
				document.getElementById("taOut").value = taInput*495;
			}
		}
		
		if(transselection==="Senior"){
			if(urgselection==="Non-Urgent"){
				document.getElementById("taOut").value = taInput*330;
			}
			if(urgselection==="Semi-Urgent"){
				document.getElementById("taOut").value = taInput*374;
			}
			if(urgselection==="Urgent"){
				document.getElementById("taOut").value = taInput*418;
			}
			if(urgselection==="Panic"){
				document.getElementById("taOut").value = taInput*523
			}
		}
		
		else if(transselection==="Naomi"){
			if(urgselection==="Non-Urgent"){
				document.getElementById("taOut").value = taInput*352;
			}
			if(urgselection==="Semi-Urgent"){
				document.getElementById("taOut").value = taInput*396;
			}
			if(urgselection==="Urgent"){
				document.getElementById("taOut").value = taInput*440;
			}
			if(urgselection==="Panic"){
				document.getElementById("taOut").value = taInput*550;
			}
		}
	}	
}

function addLine(){
	document.getElementById("buttonCalc").disabled = true;
	document.getElementById("chosenunit").disabled = true;
	document.getElementById("chosentrans").disabled = true;
	document.getElementById("chosenurg").disabled = true;
	document.getElementById("taIn").disabled = true;
}