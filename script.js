window.onload = () => {
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
        let turn = (counter % 2 == 0) ? turnValue.innerHTML = "X's TURN" : turnValue.innerHTML = "O's TURN"
        memory(event.target.id, turn.slice(0, 1))
    }

    let winCells = [
        ['1', '2', '3'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['4', '5', '6'],
        ['3', '5', '7']
    ]

    let x = new Set()
    let o = new Set()


    function memory(id, sign) {
        if (id == '') {
            return
        }
        if (sign == 'O') {
            x.add(id)
            xPlayer = Array.from(x)
            checkWinner(xPlayer, 'X')
        }
        else {
            o.add(id)
            oPlayer = Array.from(o)
            checkWinner(oPlayer, 'O')
        }
    }

    let winner

    function checkWinner(signResult, player) {
        for (let i = 0; i < winCells.length; i++) {
            winner = []
            for (let j = 0; j < signResult.length; j++) {
                if (winCells[i].includes(signResult[j])) {
                    winner.push(player)
                }
                if (winner.length == 3) {
                    alert(`Winner is ${player}`)
                    checkWinner = NaN
                    break
                }
            }
        }
        if ((x.size + o.size) == 9) {
            alert('No winners, no losers, worthy fight!')
            checkWinner = NaN
            return
        }
    }
}

