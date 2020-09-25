let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target value
const generateTarget = () => Math.floor(Math.random() * 10);

// Determine if the human or computer wins
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let humanDifference = Math.abs(target - currentHumanGuess);
    let computerDifference = Math.abs(target - computerGuess);
    
    if (humanDifference > computerDifference) {
        return 'false';
    } else {
        return 'true';
    }
};

// Update the correct score
const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore += 1;

// Increase the round number
const advanceRound = () => currentRoundNumber +=1;


