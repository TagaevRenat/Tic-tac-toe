let target = document.querySelector('.countainer')
target.addEventListener('mousedown', (event) => fill(event))

let turnValue = document.querySelector('.turn')
let counter = 0

function fill(event) {
    if (event.target.textContent == '') {
        let sign = (counter % 2 == 0) ? event.target.innerHTML = 'X' : event.target.innerHTML = '0'
        counter++
    }
    if (event.target.textContent == 'RESET GAME') {
        document.location.reload()
    }
    let turn = (counter % 2 == 0) ? turnValue.innerHTML = "'X's TURN" : turnValue.innerHTML = "'O's TURN"
    memory(event.target.id, turn.slice(1, 2))
}

let winCells = [
    ['1', '2', '3', ''],
    ['7', '8', '9', ''],
    ['1', '4', '7', ''],
    ['2', '5', '8', ''],
    ['3', '6', '9', ''],
    ['1', '5', '9', ''],
    ['4', '5', '6', ''],
    ['3', '5', '7', '']
]

let x = []
let o = []


function memory(id, sign) {
    if (sign == 'O') {
        x.push(id)
        checkWinner(x, 'X')
    }
    else {
        o.push(id)
        checkWinner(o, 'O')
    }
}

let winner = ''

function checkWinner(sign, player) {
    for (let i = 0; winCells.length > i; i++) {
        for (j = 0; j < 4; j++) {
            if (sign.includes(winCells[i][j])) {
                winner += winCells[i][j]
                console.log(winner)
            }
            else {
                winner = ''
            }
            if (winner.length == 3) {
                alert(`Winner is ${player}`)
                document.location.reload()
                break
            }
        }
    }

}
