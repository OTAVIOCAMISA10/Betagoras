const matchesContent = document.getElementById("matchesContent");
const matchesBody = document.getElementById("matchesBody");
const statisticsBody = document.getElementById("statisticsBody");

const baseURL =
  "https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4351&s=2024";

const baseURL2 =
  "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Brazilian%20Serie%20B";

async function getInfo() {
  const response = await fetch(baseURL);
  const responseData = await response.json();
  responseData.table.forEach((name, index) => {
    const tableRow = document.createElement("tr");
    const tableDataTeam = document.createElement("td");
    const nameTeam = document.createElement("h1");
    const numberTeam = document.createElement("td");
    const teamImg = document.createElement("img");

    numberTeam.classList.add("number-team");
    nameTeam.classList.add("name-team");
    teamImg.classList.add("img-team");
    tableDataTeam.classList.add("td-name-team");
    numberTeam.innerText = index + 1;
    nameTeam.innerText = name.strTeam;
    teamImg.src = name.strBadge;

    tableDataTeam.append(teamImg, nameTeam);
    tableRow.append(numberTeam, tableDataTeam);
    matchesBody.append(tableRow);

    const statisticsTr = document.createElement("tr");
    const staticsPG = document.createElement("td");
    const staticsJ = document.createElement("td");
    const staticsV = document.createElement("td");
    const staticsE = document.createElement("td");
    const staticsD = document.createElement("td");

    staticsPG.innerHTML = name.intPoints;
    staticsJ.innerHTML = name.intPlayed;
    staticsV.innerHTML = name.intWin;
    staticsE.innerHTML = name.intDraw;
    staticsD.innerHTML = name.intLoss;
    statisticsTr.append(staticsPG, staticsJ, staticsV, staticsE, staticsD);
    statisticsBody.append(statisticsTr);
  });
  console.log(responseData.table);
}

getInfo();
