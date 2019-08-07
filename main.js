var wood = 0;

function woodClick(number){
	number = number + Math.floor((Math.pow(axecurrent, 2)/4))
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood;
};

var axecurrent = 1;
var shovelcurrent = 1;

function upgrade(number, position){
	if (number == 1) {
		var axecost = Math.floor(Math.pow(axecurrent, 5.6)) + 50;
		if (wood >= axecost) {
			wood = wood - axecost;
			axecurrent++;
			axecost = Math.floor(Math.pow(axecurrent, 5.6)) + 50;
			document.getElementById("axecost").innerHTML = axecost + " wood";
			document.getElementById("wood").innerHTML = wood;
		}
	}
	if (number == 2) {
		var shovelcost = Math.floor(Math.pow(shovelcurrent, 7.2)) + 60;
		if (wood >= shovelcost) {
			wood = wood - shovelcost;
			shovelcurrent++;
			shovelcost = Math.floor(Math.pow(shovelcurrent, 7.2)) + 60;
			document.getElementById("shovelcost").innerHTML = shovelcost + " wood";
			document.getElementById("wood").innerHTML = wood;
		}
	}
};

function saveGame(){
	"use strict";
	var save = {
    wood: wood,
	};
	localStorage.setItem("save",JSON.stringify(save));
}

function loadGameOnStartup(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.wood !== "undefined") wood = savegame.wood;
  document.getElementById("wood").innerHTML = wood;
}

function loadGame(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.wood !== "undefined") wood = savegame.wood;
  document.getElementById("wood").innerHTML = wood;
}

function deleteSave(){
	"use strict";
	var deleteSave1 = prompt("Are you sure you want to do this? Type 'yes' if so.");
	if(deleteSave1 === "yes"){
        localStorage.removeItem("save");
		alert("Save deleted!");
    }
}

function deleteSaveOverride(){
alert("Save deleted!");
}

window.setInterval(function(){ //timer!
  if (wood > 0) {
  };
}, 1000);
