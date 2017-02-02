class TicTacToe {
    constructor() {
     var arr = [[0,0,0], [0,0,0], [0,0,0]];
      this.arr = arr;
      this.count = 0;
    }

    getCurrentPlayerSymbol() {
     if(!(this.count % 2)) return 'x';
      else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
     if(!this.arr[rowIndex][columnIndex] && this.count < 9) {
      !(this.count % 2) ?  this.arr[rowIndex][columnIndex] = 'x' : this.arr[rowIndex][columnIndex] = 'o';
      this.count++;
     }
    }

    isFinished() {
     if(this.count == 9 || this.getWinner())
        return true;
     else return false;
    }

    getWinner() {
      if((this.arr[0][0] == this.arr[1][1] && this.arr[0][0] == this.arr[2][2] && this.arr[0][0] && this.arr[1][1] && this.arr[2][2])
       || (this.arr[0][2] == this.arr[1][1] && this.arr[0][2] == this.arr[2][0] && this.arr[0][2] && this.arr[1][1] && this.arr[2][0])) 
        return this.arr[1][1]; 
      for(var i = 0; i < 3; i++)
       if(this.arr[i][0] == this.arr[i][1] && this.arr[i][0] == this.arr[i][2]
        && this.arr[i][0] && this.arr[i][1] && this.arr[i][2]) 
         return this.arr[i][0];  
      for(var j = 0; j < 3; j++) 
       if(this.arr[0][j] == this.arr[1][j] && this.arr[0][j] == this.arr[2][j]
        && this.arr[0][j] && this.arr[1][j] && this.arr[2][j])
         return this.arr[0][j]; 
     return null;
    } 

    noMoreTurns() {
     if(this.count == 9)
        return true;
     else return false;
    }

    isDraw() {
     if(this.count == 9 && !this.getWinner())
        return true;
     else return false;
    }

    getFieldValue(rowIndex, colIndex) {
     if(this.arr[rowIndex][colIndex])
      return this.arr[rowIndex][colIndex];
     else return null;
    }
}

module.exports = TicTacToe;
