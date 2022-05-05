let currentPlayer = 'playerX';
let winner = 'empty'
const playerXsymbol = 1;
const playerOsymbol = 0;
let win_flag = false
let widraw = false
let myarray = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    let playerDisplay = document.querySelector('#player')

    squares.forEach(function (square) {
        square.addEventListener('click', clickOutcome)

    })

    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        
        if (win_flag == false && widraw == false) {
            if(myarray[index] == -1){
                if(playerDisplay.innerHTML == 'playerX') {
                    squares[index].classList.add('playerX')
                    playerDisplay.innerHTML = 'playerO'
                    myarray[index] = playerXsymbol;
                    document.getElementById('error').innerHTML = ''
                    check(playerXsymbol)
                } else {
                    squares[index].classList.add('playerO')
                    playerDisplay.innerHTML = 'playerX'
                    myarray[index] = playerOsymbol
                    document.getElementById('error').innerHTML = ''
                    check(playerOsymbol)
                }
            }
            else {
                document.getElementById('error').innerHTML = 'The box is already filled'
            }
            setTimeout(result, 0)
        }
    }

    function check(symbol) {
        // all match pattern for playerO
        if((myarray[2] == symbol && myarray[5] == symbol && myarray[8] == symbol) || (myarray[0] == symbol && myarray[1] == symbol && myarray[2] == symbol) || (myarray[3] == symbol && myarray[4] == symbol && myarray[5] == symbol) || (myarray[6] == symbol && myarray[7] == symbol && myarray[8] == symbol) || (myarray[0] == symbol && myarray[3] == symbol && myarray[6] == symbol) || (myarray[1] == symbol && myarray[4] == symbol && myarray[7] == symbol) || (myarray[2] == symbol && myarray[5] == symbol && myarray[8] == symbol) || (myarray[0] == symbol && myarray[4] == symbol && myarray[8] == symbol) || (myarray[2] == symbol && myarray[4] == symbol && myarray[6] == symbol)) {
            console.log("playerO won the game")
            if ((myarray[0] == symbol && myarray[1] == symbol && myarray[2] == symbol)) {
                squares[0].classList.add('horizontal_one')
                squares[1].classList.add('horizontal_one')
                squares[2].classList.add('horizontal_one')
            }
            if ((myarray[3] == symbol && myarray[4] == symbol && myarray[5] == symbol)) {
                squares[3].classList.add('horizontal_two')
                squares[4].classList.add('horizontal_two')
                squares[5].classList.add('horizontal_two')
            }
            if ((myarray[6] == symbol && myarray[7] == symbol && myarray[8] == symbol)) {
                squares[6].classList.add('horizontal_three')
                squares[7].classList.add('horizontal_three')
                squares[8].classList.add('horizontal_three')
            }
            if (myarray[1] == symbol && myarray[4] == symbol && myarray[7] == symbol) {
                squares[1].classList.add('vertical')
                squares[4].classList.add('vertical')
                squares[7].classList.add('vertical')
            }
            if (myarray[0] == symbol && myarray[3] == symbol && myarray[6] == symbol) {
                squares[0].classList.add('vertical')
                squares[3].classList.add('vertical')
                squares[6].classList.add('vertical')
            }
            if (myarray[2] == symbol && myarray[5] == symbol && myarray[8] == symbol) {
                squares[2].classList.add('vertical')
                squares[5].classList.add('vertical')
                squares[8].classList.add('vertical')
            }
            if (myarray[0] == symbol && myarray[4] == symbol && myarray[8] == symbol) {
                squares[0].classList.add('right_diagonal')
                squares[4].classList.add('right_diagonal')
                squares[8].classList.add('right_diagonal')
            }
            if (myarray[2] == symbol && myarray[4] == symbol && myarray[6] == symbol) {
                squares[2].classList.add('left_diagonal')
                squares[4].classList.add('left_diagonal')
                squares[6].classList.add('left_diagonal')
            }
            setWinner(symbol);

        }
        else if (myarray[0] != -1 && myarray[1] != -1 && myarray[2] != -1 && myarray[3] != -1 && myarray[4] != -1 && myarray[5] != -1 && myarray[6] != -1 && myarray[7] != -1 && myarray[8] != -1) {
            console.log('game is widraw')
            widraw = true
        }
        else {

        }
    }

    function setWinner(symbol) {
        if (symbol === playerXsymbol) {
            winner = 'PlayerX'
            win_flag = true
        }
        else {
            winner = 'PlayerO'
            win_flag = true
        }
    }

    function result() {
        if(win_flag) {
            document.getElementById('result').innerHTML = `${winner} won the game`
            if(confirm(`${winner} won the game. Press OK if you want to play again?`)){
                window.location.reload();
            }
        }
        else if(widraw) {
            if(confirm(`The game is widraw. Press OK if you want to play again?`)) {
                document.getElementById('result').innerHTML = "The game is widraw"
                window.location.reload();
            }
        }
    }

})
