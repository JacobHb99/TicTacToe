function renderWinnerCard(winner) {
    document.getElementById('winnerCard').classList.remove('d-none');
    let winnerContent = document.getElementById('winnerHeadline');

    winnerContent.innerHTML = '';
    winnerContent.innerHTML += /*html*/`
        <h3>Herlichen Glückwunsch ${winner}-Player</h3>
    `
}



function deleteWinnerCard() {
    document.getElementById('winnerCard').classList.add('d-none');

    for (let i = 0; i <= field.length; i++) {
        const element = field[i];
        document.getElementById(`singleField${i}`).setAttribute('onClick', 'chooseField('+(i)+');');
        document.getElementById(`circleContainer${i}`).classList.add('d-none');
        document.getElementById(`crossContainer${i}`).classList.add('d-none');
    }
    field = [];
}

