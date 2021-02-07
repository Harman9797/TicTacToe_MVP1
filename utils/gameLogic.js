const gameboard = [0,0,0,0,0,0,0,0,0]

function addToBaord({ user, tile }) {
    gameboard[parseInt(tile) - 1] = user
    return checkIfPlayerWins(user)
}

function checkIfPlayerWins(user){
    if(
        (gameboard[0] == user && gameboard[1] == user && gameboard[2] == user) ||
        (gameboard[3] == user && gameboard[4] == user && gameboard[5] == user) ||
        (gameboard[6] == user && gameboard[7] == user && gameboard[8] == user) ||
        (gameboard[0] == user && gameboard[3] == user && gameboard[6] == user) ||
        (gameboard[1] == user && gameboard[4] == user && gameboard[7] == user) ||
        (gameboard[2] == user && gameboard[5] == user && gameboard[8] == user) ||
        (gameboard[0] == user && gameboard[4] == user && gameboard[8] == user) ||
        (gameboard[2] == user && gameboard[4] == user && gameboard[6] == user)
    ){
        return true;
    }
    else{
        return false;
    }

}

module.exports = {
    addToBaord
}