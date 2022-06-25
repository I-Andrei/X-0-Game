 let jucator = 0;
 const cell = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

 function x_Or_0(s){
  let player = ""
  if(jucator == 0 || jucator == 2 || jucator == 4 || jucator == 6 || jucator == 8){
    document.getElementById(s).innerHTML = "X"
    cell[s] = 'X'
    player = "X"
  }
  else{
    document.getElementById(s).innerHTML = "0"
    cell[s] = '0'
    player = "0"
  }
  if ((cell[0] == cell[1] && cell[1] == cell[2]) || (cell[3] == cell[4] && cell[4] == cell[5]) || (cell[6] == cell[7] && cell[7] == cell[8]) || (cell[0] == cell[3] && cell[3] == cell[6]) || (cell[1] == cell[4] && cell[4] == cell[7]) || (cell[2] == cell[5] && cell[5] == cell[8]) || (cell[0] == cell[4] && cell[4] == cell[8]) || (cell[6] == cell[4] && cell[4] == cell[2]))
    document.getElementById('MyID').innerHTML = "Player " + player + " won!" 
  if (jucator == 8)
    document.getElementById('MyID').innerHTML = "Draw!"
  ++jucator
 }
 