function playGame(guess) {
    const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0
    }

    const randomNumber = Math.random();
    let computerGuess = randomNumber > 0.5 ? 'head' : 'tail'

    console.log(guess === computerGuess ? 'You win' : 'You loose');

    guess === computerGuess ? score.wins++ : score.losses++;

    console.log(score);

    localStorage.setItem('score', JSON.stringify(score));
}
