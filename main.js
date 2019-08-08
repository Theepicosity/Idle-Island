var wood = 0000;
var stone = 0;

function woodClick(number){
	number = number + Math.floor((Math.pow(axecurrent, 2)/4))
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood;
};
function stoneClick(number){
	var randint = Math.floor(Math.random() * shovelcurrent);
	if (randint > 0) {
		number = number + Math.floor(Math.random() * (shovelcurrent-1))
		stone = stone + number;
		document.getElementById("stone").innerHTML = stone;
	}
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
		var shovelcost = Math.floor(Math.pow(shovelcurrent, 7.2)) + 75;
		if (wood >= shovelcost) {
			wood = wood - shovelcost;
			shovelcurrent++;
			shovelcost = Math.floor(Math.pow(shovelcurrent, 7.2)) + 60;
			document.getElementById("shovelcost").innerHTML = shovelcost + " wood";
			document.getElementById("wood").innerHTML = wood;
			document.getElementById("shovelvisible").style.visibility="visible";
			document.getElementById("shovelpvisible").style.visibility="visible";
			document.getElementById("stone").style.visibility="visible";
		}
	}
};

var netCount = 0;

function craft(number, position){
	if (number == 1) {
		if (wood >= 156) {
			wood = wood - 156;
			netCount++;
			document.getElementById("netCount").innerHTML = netCount + " nets";
			document.getElementById("wood").innerHTML = wood;
            var netSpeed = 500 * (1/netCount)
            clearInterval(netTimer);
            netTimer = window.setInterval(function(){
            if (netCount > 0) {
                var randint = Math.floor(Math.random() * 6);
                if (randint > 2) {
                    if (randint == 3 || randint == 4) {wood++;
                                 document.getElementById("wood").innerHTML = wood;
                                };
                if (randint == 5) {stone++;
                                 document.getElementById("stone").innerHTML = stone;
                                };
          };
      };
    }, netSpeed);
		}
	}
};

function saveGame(){
	"use strict";
	var save = {
    wood: wood,
	axecurrent: axecurrent,
	stone: stone,
	shovelcurrent: shovelcurrent,
    netCount: netCount,
	};
	localStorage.setItem("save",JSON.stringify(save));
}

function loadGame(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.wood !== "undefined") wood = savegame.wood;
  document.getElementById("wood").innerHTML = wood;
  if (typeof savegame.axecurrent !== "undefined") axecurrent = savegame.axecurrent; {
	var axecost = Math.floor(Math.pow(axecurrent, 5.6)) + 50;
	document.getElementById("axecost").innerHTML = axecost + " wood";
  }
  if (typeof savegame.stone !== "undefined") stone = savegame.stone;
  document.getElementById("stone").innerHTML = stone;
  if (typeof savegame.shovelcurrent !== "undefined"){ shovelcurrent = savegame.shovelcurrent;
	var shovelcost = Math.floor(Math.pow(shovelcurrent, 7.2)) + 60;
	document.getElementById("shovelcost").innerHTML = shovelcost + " wood";
  if (typeof savegame.netCount !== "undefined") netCount= savegame.netCount;
  document.getElementById("netCount").innerHTML = netCount + " nets";
  }
}

var axecost = Math.floor(Math.pow(axecurrent, 5.6)) + 50;
var shovelcost = Math.floor(Math.pow(shovelcurrent, 7.2)) + 60;
document.getElementById("axecost").innerHTML = axecost + " wood";
document.getElementById("shovelcost").innerHTML = shovelcost + " wood";

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

var netSpeed = 500 * (1/netCount);

netTimer = window.setInterval(function(){
      if (netCount > 0) {
          var randint = Math.floor(Math.random() * 6);
          if (randint > 2) {
              if (randint == 3 || randint == 4) {wood++;
                                 document.getElementById("wood").innerHTML = wood;
                                };
              if (randint == 5) {stone++;
                                 document.getElementById("stone").innerHTML = stone;
                                };
          };
      };
    }, netSpeed);
