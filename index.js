"use strict";
let teams = [
  {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX",},
  {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
  {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
  {code:"KAN", name:"Kansas City Chiefs",plays:"Kansas City, MO"},
];
let array = {code: " ", name:"Please select one",};
teams.push(array);

const teamsList = document.getElementById("footballTeams");
const outputH1 = document.getElementById("outputH1");
const doSomethingButton = document.getElementById("doSomethingButton");


window.onload = () => {
  populateTeamsData();
  doSomethingButton.onclick = onDoSomethingBtnClicked;

}
function populateTeamsData() {
  for(let i=0; i<teams.length; i++){
    let teamsName = teams[i].name;
    let teamsCode = teams[i].code;
    let newOption = document.createElement("option");
    newOption.textContent = teamsName;
    newOption.value = teamsCode;
    teamsList.appendChild(newOption);
  }
}

function onDoSomethingBtnClicked(){
  let teamsAbbreviation = teamsList.value;
  console.log(teamsAbbreviation);

  for(let i=0; i<teams.length; i++){
    let teamsCode = teams[i].code;
    let teamsName = teams[i].name;
    let teamPlays = teams[i].plays;
  

    if(teamsAbbreviation == " "){
      outputH1.innerHTML = "";
    } else if(teamsAbbreviation == teamsCode){
      outputH1.innerHTML = `You selected the ${teamsName} (${teamsCode}) 
      who plays in ${teamPlays}.`;
    }
  }

}
