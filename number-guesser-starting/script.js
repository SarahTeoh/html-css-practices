let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target value
const generateTarget = () => Math.floor(Math.random() * 10);

// Determine if the human or computer wins
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    const humanDifference = getAbsoluteDistance(target, currentHumanGuess);
    const computerDifference = getAbsoluteDistance(target, computerGuess);

    return humanDifference <= computerDifference;
};

// Calculate absolute distance between 2 numbers
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

// Update the correct score
const updateScore = winner => winner === 'human' ? humanScore++ : computerScore ++;

// Increase the round number
const advanceRound = () => currentRoundNumber ++;




