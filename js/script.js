const createCandidate = function (name) {
  const candidate  = {
    name: name,
    electionResults: null,
    totalVotes: 0, 
  };
  return candidate;
};

const blueCandidate = createCandidate("Joey B.");
const redCandidate = createCandidate("Donny T.");

console.log(blueCandidate);
console.log(redCandidate);