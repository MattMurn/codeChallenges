class Board {
    constructor(cols=4, rows=4, mines=4 ) {
        this.cols = cols,
        this.rows = rows,
        this.mines = mines,
        this.board = []
    }
    createMine() {
        for(let i = 0; i < this.mines; i++){
            this.board[this.randomNumberGenerator(this.rows)][this.randomNumberGenerator(this.cols)] = "****";
        }
    }
    createRow() {
        let newRow = []
        for(let i = 0; i <= this.cols; i++){
            newRow.push('-');
        }
        return newRow;
    }
    createBoard() {
        for(let i = 0; i <= this.rows-1; i++){
            this.board.push(this.createRow(this.cols));
        }
        this.createMine();
        this.indexValues();
        this.printBoard();
    }
    printBoard() {
        console.log(this.board);
    }
    randomNumberGenerator(max) {
        return Math.floor(Math.random()* max);
    }
    indexValues() {
    // takes in an index and returns an updated value
      for(let i =0; i <= this.board.length-1; i++){
          for(let n=0; n <= this.cols; n++){
              let prev = n-1;
              let next = n + 1;
              let topLeft = (i -1 >= 0) ? this.board[i-1][n-1] : null;
              let top = (i -1 >= 0) ? this.board[i-1][n] : null;
              let topRight = (i -1 >= 0) ? this.board[i-1][n+1] : null;
              (this.board[i][n] === '****') ? null : 
              this.board[i][n] = n;
              console.log(`previous: ${top}`)
          }
      }  
    }
}

let four = new Board(5, 5);
four.createBoard();
// four.printBoard();


