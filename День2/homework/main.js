let board = document.querySelector("#board");


function create_element(color){
    let div = document.createElement('div');
    div.className = "Block " + color
    return div
}

function newLine(){
    let div = document.createElement('div');
    div.style.clear="left"
    board.appendChild(div)
}


let lastColor = "white"
function createWhiteLine(){
    lastColor = "white"
    for (let block = 1;block<=8;block++){
        let div = create_element(lastColor);
        board.appendChild(div)
        if (lastColor == "white"){
            lastColor = "black"
        } else {
            lastColor = "white"
        }
}}
function createBlackLine(){
    lastColor = "black"
    for (let block = 1;block<=8;block++){
        let div = create_element(lastColor);
        board.appendChild(div)
        if (lastColor == "white"){
            lastColor = "black"
        } else {
            lastColor = "white"
        }
    }}


function createBoard() {
    for (let i = 0;i<8;i+=2){
        createWhiteLine()
        newLine()
        createBlackLine()
        newLine()
    }
}

createBoard()