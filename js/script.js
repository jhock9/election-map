const createCandidate = function (name, color) {
  const candidate  = {
    name: name,
    color: color,
    electionResults: null,
    // totalVotes: 0,
    
    //methods for tallying votes//
    totalVotes: function() {
      this.totalVotes = 0;
      
      for (let i = 0; i < this.electionResults.length; i++) {
        this.totalVotes = this.totalVotes + this.electionResults[i]; 
      };
    }
  };
  return candidate;
};

let winner = "";

// declaring the candidates
const blueCandidate = createCandidate("Ronald McDonald", [51, 102, 255]);
const redCandidate = createCandidate("Bozo the Clown", [178,34,34]);

// declaring votes from states via .csv file
blueCandidate.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
redCandidate.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

// updating vote counts
blueCandidate.electionResults.splice(9,1,28);
redCandidate.electionResults.splice(9,1,1);
blueCandidate.electionResults.splice(4,1,38);
redCandidate.electionResults.splice(4,1,17);
blueCandidate.electionResults.splice(43,1,27);
redCandidate.electionResults.splice(43,1,11);

// getting state vote count using map.js code
const setStateResults = function (state) {
  theStates[state].winner = null;
  
  if (blueCandidate.electionResults[state] > redCandidate.electionResults[state]) {
    theStates[state].winner = blueCandidate;
    // console.log(`${blueCandidate.name} has won the state of ${theStates[state].nameFull} with a total of ${blueCandidate.electionResults[state]} votes!`)
  } else if (blueCandidate.electionResults[state] < redCandidate.electionResults[state]) {
    theStates[state].winner = redCandidate;
    // console.log(`${redCandidate.name} has won the state of ${theStates[state].nameFull} with a total of ${redCandidate.electionResults[state]} votes!`)
  // } else {
    // console.log(`Both candidates received ${blueCandidate.electionResults[state]} votes! Time for a recount!`)
  };

  const stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  } else {
    theStates[state].rgbColor = [153, 0, 255];
  };

  // adding state votes to dynamic state table
  const stateInfoTable = document.getElementById("stateResults");
  const stateHeader = stateInfoTable.children[0];
  const stateBody = stateInfoTable.children[1];
  const stateName = stateHeader.children[0].children[0];
  const stateAbbrev = stateHeader.children[0].children[1];
  const candidate1Name = stateBody.children[0].children[0];
  const candidate1Results = stateBody.children[0].children[1];
  const candidate2Name = stateBody.children[1].children[0];
  const candidate2Results = stateBody.children[1].children[1];
  const winnerName = stateBody.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = redCandidate.name;
  candidate1Results.innerText = redCandidate.electionResults[state];
  candidate2Name.innerText = blueCandidate.name;
  candidate2Results.innerText = blueCandidate.electionResults[state];

  if (stateWinner === null) {
    winnerName.innerText = "TIE";
  } else {
    winnerName.innerText = stateWinner.name;
  };
};

blueCandidate.totalVotes();
redCandidate.totalVotes();

//announcing results
if (blueCandidate.totalVotes > redCandidate.totalVotes) {
  winner = blueCandidate.name;
  // console.log(`${blueCandidate.name} has won the election with a total of ${blueCandidate.totalVotes} votes!`)
} else if (blueCandidate.totalVotes < redCandidate.totalVotes) {
  winner = redCandidate.name;
  // console.log(`${redCandidate.name} has won the election with a total of ${redCandidate.totalVotes} votes!`)
} else {
  winner = "It's a tie!";
  // console.log(`Both candidates received ${blueCandidate.totalVotes} votes! Time for a recount!`)
};

// adding country votes to header table
const countryInfoTable = document.getElementById("countryResults");
const countryHeader = countryInfoTable.children[0].children[0];
countryHeader.children[0].innerText = redCandidate.name;
countryHeader.children[1].innerText = redCandidate.totalVotes;
countryHeader.children[2].innerText = blueCandidate.name;
countryHeader.children[3].innerText = blueCandidate.totalVotes;
countryHeader.children[5].innerText = winner;

// console.log(blueCandidate);
// console.log(redCandidate);