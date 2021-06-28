const createCandidate = function (name) {
  const candidate  = {
    name: name,
    electionResults: null,
    totalVotes: 0,
    totalVotes: function () {
      this.totalVotes = 0;
      
      for (let i = 0; i < this.electionResults.length; i++) {
        this.totalVotes = this.totalVotes + this.electionResults[i];
        // console.log(this.totalVotes);
      };
    }
  };
  return candidate;
};

// declaring the candidates
const blueCandidate = createCandidate("Ronald McDonald");
const redCandidate = createCandidate("Bozo the Clown");

blueCandidate.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
redCandidate.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

// updating vote counts
blueCandidate.electionResults.splice(9,1,28);
redCandidate.electionResults.splice(9,1,1);
blueCandidate.electionResults.splice(4,1,38);
redCandidate.electionResults.splice(4,1,17);
blueCandidate.electionResults.splice(43,1,27);
redCandidate.electionResults.splice(43,1,11);

// console.log(blueCandidate);
// console.log(redCandidate);

blueCandidate.totalVotes();
redCandidate.totalVotes();

console.log("The blue party has collected " + blueCandidate.totalVotes + " so far!");
console.log("The red party has collected " + redCandidate.totalVotes + " so far!")

//announcing winner
const winner = function () {
  if (blueCandidate.totalVotes > redCandidate.totalVotes) {
    let winner = blueCandidate.name;
    console.log(`${blueCandidate.name} has won the election with a total of ${blueCandidate.totalVotes} votes!`)
  } else if (blueCandidate.totalVotes < redCandidate.totalVotes) {
    let winner = redCandidate.name;
    console.log(`${redCandidate.name} has won the election with a total of ${redCandidate.totalVotes} votes!`)
  } else {
    console.log(`Both candidates received ${blueCandidate.totalVotes} votes! Time for a recount!`)
  };
};

winner();