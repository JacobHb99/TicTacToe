let field = [];
let currentShape = 'circle';



function chooseField(fieldnumber) {
    if(currentShape === 'circle') {
        currentShape = 'cross';
        render('circle');
    }else {
        currentShape = 'circle';
        render('cross');
    }
    field[fieldnumber] = currentShape;
 
    renderField(fieldnumber, currentShape);
    checkForWinner();
}



function render(currentShape) {
    let whoseTurnContent = document.getElementById('whoseTurnInfo');

    whoseTurnContent.innerHTML = '';

    if(currentShape == undefined) {
        currentShape = 'cross';
        whoseTurnContent.innerHTML += /*html*/`
        <div>Am Zug: ${currentShape}</div>
    `
    } else {
        whoseTurnContent.innerHTML += /*html*/`
            <div>Am Zug: ${currentShape}</div>
        `
    }
}



function renderField(fieldnumber, currentShape) {
    document.getElementById(`${currentShape}Container${fieldnumber}`).classList.remove('d-none');
    document.getElementById(`singleField${fieldnumber}`).onclick = null;
}



