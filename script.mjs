console.log("v0.0.1");

import * as Module from 'customFunctions.mjs';

var stats = {
    "str": 12,
    "dex": 12,
    "con": 12,
    "int": 12,
    "wis": 12,
    "cha": 12
}

showStats();

var temp;
var pointbuy = false;
var randomstats = false;
const reducer = (previousValue, currentValue) => previousValue + currentValue;
var statsTotal = stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
var points = 0;

function checkForPointBuy() {
    var theostatsTotal = stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
    var confirmPointBuy = confirm("This will take the current total of your stats to buy with (" + theostatsTotal + "). You may not randomize its stats once you select point buy. Are you sure?")
    document.getElementById("pointbuy").checked = false;
    if (pointbuy == false && confirmPointBuy == true) {
        statsTotal = stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
        document.getElementById("statbox").innerHTML = 0;
        document.getElementById("weakDiv").style.visibility = "hidden";
        points = 0;
        pointbuy = true;
        document.getElementById("chaDown").style.visibility = "visible";
        document.getElementById("strUp").style.visibility = "visible";
    }
}

function checkForRandom() {
    points = 0;
    for (x = 0; x < 6; x++) {
        var statsdice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        statsdice.sort();
        console.log(statsdice);
        statsdice.shift();
        var result = sumArray(statsdice);
        console.log(result);
        switch (x) {
            case 0:
                stats.str = result;
                break;
            case 1:
                stats.dex = result;
                break;
            case 2:
                stats.con = result;
                break;
            case 3:
                stats.int = result;
                break;
            case 4:
                stats.wis = result;
                break;
            case 5:
                stats.cha = result;
                break;
        }
    }
    document.getElementById("str").innerHTML = stats.str;
    document.getElementById("dex").innerHTML = stats.dex;
    document.getElementById("con").innerHTML = stats.con;
    document.getElementById("int").innerHTML = stats.int;
    document.getElementById("wis").innerHTML = stats.wis;
    document.getElementById("cha").innerHTML = stats.cha;
}

function changeStat(move) {
    switch (move) {
        case 'strUp':
            if (points > 0) {
                stats.str++;
                points--;
                document.getElementById("str").innerHTML = stats.str;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'strDown':
            if (stats.str > 0) {
                stats.str--;
                points++;
                document.getElementById("str").innerHTML = stats.str;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'dexUp':
            if (points > 0) {
                stats.dex++;
                points--;
                document.getElementById("dex").innerHTML = stats.dex;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'dexDown':
            if (stats.dex > 0) {
                stats.dex--;
                points++;
                document.getElementById("dex").innerHTML = stats.dex;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'conUp':
            if (points > 0) {
                stats.con++;
                points--;
                document.getElementById("con").innerHTML = stats.con;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'conDown':
            if (stats.con > 0) {
                stats.con--;
                points++;
                document.getElementById("con").innerHTML = stats.con;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'intUp':
            if (points > 0) {
                stats.int++;
                points--;
                document.getElementById("int").innerHTML = stats.int;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'intDown':
            if (stats.int > 0) {
                stats.int--;
                points++;
                document.getElementById("int").innerHTML = stats.int;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'wisUp':
            if (points > 0) {
                stats.wis++;
                points--;
                document.getElementById("wis").innerHTML = stats.wis;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'wisDown':
            if (stats.wis > 0) {
                stats.wis--;
                points++;
                document.getElementById("wis").innerHTML = stats.wis;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'chaUp':
            if (points > 0) {
                stats.cha++;
                points--;
                document.getElementById("cha").innerHTML = stats.cha;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'chaDown':
            if (stats.cha > 0) {
                stats.cha--;
                points++;
                document.getElementById("cha").innerHTML = stats.cha;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
    }
}

var mode = 'points';

function switchModes() {
    if (mode == 'dice') {
        mode = 'points';
        document.getElementsByClassName("switchNub")[0].style.top = "62px";
        document.getElementsByClassName("statbox")[0].innerHTML = points;
        document.getElementsByClassName("statbox")[0].style.fontSize = "50px";
        document.getElementById("dumpButton").style.visibility = "visible";
        document.getElementsByClassName("statbox")[0].removeAttribute("onclick");
    } else if (mode == 'points') {
        mode = 'dice';
        document.getElementsByClassName("switchNub")[0].style.top = "43px";
        document.getElementsByClassName("statbox")[0].innerHTML = "ROLL";
        document.getElementsByClassName("statbox")[0].setAttribute("onclick", "checkForRandom()");
        document.getElementsByClassName("statbox")[0].style.fontSize = "20px";
        document.getElementById("dumpButton").style.visibility = "hidden";
    }
}

function subclassChange(change) {

}

function subraceChange(race) {
    var subrace = document.getElementById(race + "Subraces").value;
    racesCheck = Object.keys(raceBonuses);
    if (document.getElementById(race + "Subraces").value == race || typeof(document.getElementById(race + "Subraces").value) != undefined) {
        document.getElementById("racialStrBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][0]);
        document.getElementById("racialDexBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][1]);
        document.getElementById("racialConBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][2]);
        document.getElementById("racialIntBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][3]);
        document.getElementById("racialWisBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][4]);
        document.getElementById("racialChaBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][5]);
    } else {
        document.getElementById("racialStrBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][0]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][0]);
        document.getElementById("racialDexBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][1]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][1]);
        document.getElementById("racialConBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][2]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][2]);
        document.getElementById("racialIntBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][3]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][3]);
        document.getElementById("racialWisBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][4]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][4]);
        document.getElementById("racialChaBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][5]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][5]);
    }
}


function pullAllStatsOut() {
    points = points + stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
    stats.str = 0;
    stats.dex = 0;
    stats.con = 0;
    stats.int = 0;
    stats.wis = 0;
    stats.cha = 0;
    document.getElementById("str").innerHTML = stats.str;
    document.getElementById("dex").innerHTML = stats.dex;
    document.getElementById("con").innerHTML = stats.con;
    document.getElementById("int").innerHTML = stats.int;
    document.getElementById("wis").innerHTML = stats.wis;
    document.getElementById("cha").innerHTML = stats.cha;
    document.getElementById("statbox").innerHTML = points;


    mode = 'points';
    document.getElementsByClassName("switchNub")[0].style.top = "62px";
    document.getElementsByClassName("statbox")[0].innerHTML = points;
    document.getElementsByClassName("statbox")[0].style.fontSize = "50px";
    document.getElementById("dumpButton").style.visibility = "visible";
    document.getElementsByClassName("statbox")[0].removeAttribute("onclick");
}

var extended = false;
var optionmode = "";

function chooseRace() {
  if (extended == false) {
    extended = true;
    optionmode = "race";
    document.getElementById("option0").style.visibility = "visible";
    document.getElementById("option0").innerHTML = "Dragonborn";
    document.getElementById("option1").style.visibility = "visible";
    document.getElementById("option1").innerHTML = "Dwarf";
    document.getElementById("option2").style.visibility = "visible";
    document.getElementById("option2").innerHTML = "Elf";
    document.getElementById("option3").style.visibility = "visible";
    document.getElementById("option3").innerHTML = "Gnome";
    document.getElementById("option4").style.visibility = "visible";
    document.getElementById("option4").innerHTML = "Half Elf";
    document.getElementById("option7").style.visibility = "visible";
    document.getElementById("option7").innerHTML = "Halfling";
    document.getElementById("option8").style.visibility = "visible";
    document.getElementById("option8").innerHTML = "Half Orc";
    document.getElementById("option9").style.visibility = "visible";
    document.getElementById("option9").innerHTML = "Human";
    document.getElementById("option10").style.visibility = "visible";
    document.getElementById("option10").innerHTML = "Tiefling";
    document.getElementById("option11").style.visibility = "visible";
    document.getElementById("option11").innerHTML = "Orc";
  } else if (extended == true) {
    extended = false
    optionmode = "";
    document.getElementById("option0").style.visibility = "hidden";
    document.getElementById("option0").innerHTML = "";
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option1").innerHTML = "";
    document.getElementById("option2").style.visibility = "hidden";
    document.getElementById("option2").innerHTML = "";
    document.getElementById("option3").style.visibility = "hidden";
    document.getElementById("option3").innerHTML = "";
    document.getElementById("option4").style.visibility = "hidden";
    document.getElementById("option4").innerHTML = "";
    document.getElementById("option5").style.visibility = "hidden";
    document.getElementById("option5").innerHTML = "";
    document.getElementById("option6").style.visibility = "hidden";
    document.getElementById("option6").innerHTML = "";
    document.getElementById("option7").style.visibility = "hidden";
    document.getElementById("option7").innerHTML = "";
    document.getElementById("option8").style.visibility = "hidden";
    document.getElementById("option8").innerHTML = "";
    document.getElementById("option9").style.visibility = "hidden";
    document.getElementById("option9").innerHTML = "";
    document.getElementById("option10").style.visibility = "hidden";
    document.getElementById("option10").innerHTML = "";
    document.getElementById("option11").style.visibility = "hidden";
    document.getElementById("option11").innerHTML = "";
    document.getElementById("option12").style.visibility = "hidden";
    document.getElementById("option12").innerHTML = "";
    document.getElementById("option13").style.visibility = "hidden";
    document.getElementById("option13").innerHTML = "";
  }
}

function chooseClass() {
  if (extended == false) {
    extended = true;
    optionmode = "class";
    console.log("test");
    document.getElementById("option0").style.visibility = "visible";
    document.getElementById("option0").innerHTML = "Artificer";
    document.getElementById("option1").style.visibility = "visible";
    document.getElementById("option1").innerHTML = "Barbarian";
    document.getElementById("option2").style.visibility = "visible";
    document.getElementById("option2").innerHTML = "Bard";
    document.getElementById("option3").style.visibility = "visible";
    document.getElementById("option3").innerHTML = "Blood";
    document.getElementById("option4").style.visibility = "visible";
    document.getElementById("option4").innerHTML = "Cleric";
    document.getElementById("option5").style.visibility = "visible";
    document.getElementById("option5").innerHTML = "Druid";
    document.getElementById("option6").style.visibility = "visible";
    document.getElementById("option6").innerHTML = "Fighter";
    document.getElementById("option7").style.visibility = "visible";
    document.getElementById("option7").innerHTML = "Monk";
    document.getElementById("option8").style.visibility = "visible";
    document.getElementById("option8").innerHTML = "Paladin";
    document.getElementById("option9").style.visibility = "visible";
    document.getElementById("option9").innerHTML = "Ranger";
    document.getElementById("option10").style.visibility = "visible";
    document.getElementById("option10").innerHTML = "Rogue";
    document.getElementById("option11").style.visibility = "visible";
    document.getElementById("option11").innerHTML = "Sorcerer";
    document.getElementById("option12").style.visibility = "visible";
    document.getElementById("option12").innerHTML = "Warlock";
    document.getElementById("option13").style.visibility = "visible";
    document.getElementById("option13").innerHTML = "Wizard";
  } else if (extended == true) {
    extended = false;
    optionmode = "";
    document.getElementById("option0").style.visibility = "hidden";
    document.getElementById("option0").innerHTML = "";
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option1").innerHTML = "";
    document.getElementById("option2").style.visibility = "hidden";
    document.getElementById("option2").innerHTML = "";
    document.getElementById("option3").style.visibility = "hidden";
    document.getElementById("option3").innerHTML = "";
    document.getElementById("option4").style.visibility = "hidden";
    document.getElementById("option4").innerHTML = "";
    document.getElementById("option5").style.visibility = "hidden";
    document.getElementById("option5").innerHTML = "";
    document.getElementById("option6").style.visibility = "hidden";
    document.getElementById("option6").innerHTML = "";
    document.getElementById("option7").style.visibility = "hidden";
    document.getElementById("option7").innerHTML = "";
    document.getElementById("option8").style.visibility = "hidden";
    document.getElementById("option8").innerHTML = "";
    document.getElementById("option9").style.visibility = "hidden";
    document.getElementById("option9").innerHTML = "";
    document.getElementById("option10").style.visibility = "hidden";
    document.getElementById("option10").innerHTML = "";
    document.getElementById("option11").style.visibility = "hidden";
    document.getElementById("option11").innerHTML = "";
    document.getElementById("option12").style.visibility = "hidden";
    document.getElementById("option12").innerHTML = "";
    document.getElementById("option13").style.visibility = "hidden";
    document.getElementById("option13").innerHTML = "";
    }
}

function chooseOption(option) {
  if (optionmode == "class") {
    console.log(document.getElementById("option" + option).innerHTML);
    document.getElementsByClassName("classChoose")[0].innerHTML = document.getElementById("option" + option).innerHTML;
  }
  if (optionmode == "race") {
      document.getElementsByClassName("raceChoose")[0].innerHTML = document.getElementById("option" + option).innerHTML;
      console.log(document.getElementById("option" + option).innerHTML);
  }
  console.log(document.getElementById("option" + option).innerHTML);
  document.getElementById("option0").style.visibility = "hidden";
  document.getElementById("option0").innerHTML = "";
  document.getElementById("option1").style.visibility = "hidden";
  document.getElementById("option1").innerHTML = "";
  document.getElementById("option2").style.visibility = "hidden";
  document.getElementById("option2").innerHTML = "";
  document.getElementById("option3").style.visibility = "hidden";
  document.getElementById("option3").innerHTML = "";
  document.getElementById("option4").style.visibility = "hidden";
  document.getElementById("option4").innerHTML = "";
  document.getElementById("option5").style.visibility = "hidden";
  document.getElementById("option5").innerHTML = "";
  document.getElementById("option6").style.visibility = "hidden";
  document.getElementById("option6").innerHTML = "";
  document.getElementById("option7").style.visibility = "hidden";
  document.getElementById("option7").innerHTML = "";
  document.getElementById("option8").style.visibility = "hidden";
  document.getElementById("option8").innerHTML = "";
  document.getElementById("option9").style.visibility = "hidden";
  document.getElementById("option9").innerHTML = "";
  document.getElementById("option10").style.visibility = "hidden";
  document.getElementById("option10").innerHTML = "";
  document.getElementById("option11").style.visibility = "hidden";
  document.getElementById("option11").innerHTML = "";
  document.getElementById("option12").style.visibility = "hidden";
  document.getElementById("option12").innerHTML = "";
  document.getElementById("option13").style.visibility = "hidden";
  document.getElementById("option13").innerHTML = "";
  extended = false;
  optionmode = "";
}