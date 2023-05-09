function checkForWinner() {
    let winner;

    if(field[0] == field[1] && field[0] == field[2] && field[0]) {
        winner = field[0];
        renderWinnerCard(winner);
    }

    if(field[3] == field[4] && field[3] == field[5] && field[3]) {
        winner = field[3];
        renderWinnerCard(winner);
    }
    

    if(field[6] == field[7] && field[6] == field[8] && field[6]) {
        winner = field[6];
        renderWinnerCard(winner);
    }
    

    if(field[0] == field[3] && field[0] == field[6] && field[0]) {
        winner = field[0];
        renderWinnerCard(winner);
    }
    

    if(field[1] == field[4] && field[1] == field[7] && field[1]) {
        winner = field[1];
        renderWinnerCard(winner);
    }
    

    if(field[2] == field[5] && field[2] == field[8] && field[0]) {
        winner = field[2];
        renderWinnerCard(winner);
    }
    

    if(field[0] == field[4] && field[0] == field[8] && field[0]) {
        winner = field[0];
        renderWinnerCard(winner);
    }
    

    if(field[2] == field[4] && field[2] == field[6] && field[2]) {
        winner = field[2];
        renderWinnerCard(winner);
    }
    
}





