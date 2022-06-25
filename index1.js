 let counter = 0;
 const cell = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

 function xOr0(s){
  let player = ''
  if (counter % 2 == 0) {
    document.getElementById(s).innerHTML = 'X'
    cell[s] = 'X'
    player = 'X'
  } else {
    document.getElementById(s).innerHTML = '0'
    cell[s] = '0'
    player = '0'
  }
  if (winnerOrDraw(counter) == 0)
    document.getElementById('game').innerHTML = 'Player ' + player + ' won!'
  else if (winnerOrDraw(counter) == 1)
    document.getElementById('game').innerHTML = 'Draw!'
  ++counter
 }

 function winnerOrDraw(counter) {
  if ((cell[0] == cell[1] && cell[1] == cell[2]) || (cell[3] == cell[4] && cell[4] == cell[5]) || (cell[6] == cell[7] && cell[7] == cell[8]) || (cell[0] == cell[3] && cell[3] == cell[6]) || (cell[1] == cell[4] && cell[4] == cell[7]) || (cell[2] == cell[5] && cell[5] == cell[8]) || (cell[0] == cell[4] && cell[4] == cell[8]) || (cell[6] == cell[4] && cell[4] == cell[2]))
    return 0
  if (counter == 8)
    return 1
  return 2
 }
 