// fhoehl.com

// Random module with an expovariate function.
Random = {};
Random.expovariate = function(lambda) {
    return (-Math.log(1 - Math.random())) / lambda;
}

// Given a cell to draw, a lambda parameter, a born rate and death rate
// the function will set 
var makeCellProcess  = function(cellSymbol, bornRate, deathRate) {
    var start = function() {
        return function() {
            var timeToNextBirth = Random.expovariate(1/bornRate),
                timeToLive = Random.expovariate(1/deathRate),
                cell = Grid.placeCell(cellSymbol);

            setTimeout(end(cell), timeToLive);
            setTimeout(start(), timeToNextBirth);
        };
    };

    var end = function(cell) {
        return function() {
            cell.remove();
        };
    };

    // Calling start to initialize the process.
    start()();
};

// Maintains the grid display of the cells.
var Grid = {
    cellSize: 30,
    
    update: function() {
        this.maxWidth = window.innerWidth;
        this.maxHeight = window.innerHeight;
        this.horizontalNumberOfCell = parseInt(this.maxWidth / this.cellSize);
        this.horizontalNumberOfCellError = this.maxWidth % this.cellSize;
        this.verticalNumberOfCell = parseInt(this.maxHeight / this.cellSize);
        this.verticalNumberOfCellError = this.maxHeight % this.cellSize;
        this.cellSizeW = this.cellSize + this.horizontalNumberOfCellError / this.horizontalNumberOfCell;
        this.cellSizeH = this.cellSize + this.verticalNumberOfCellError / this.verticalNumberOfCell;
    },

    placeCell: function(cellSymbol) {
        Grid.update();
        var x = parseInt(Math.random() * Grid.horizontalNumberOfCell) * Grid.cellSizeW + Grid.cellSizeW / 2,
            y = parseInt(Math.random() * Grid.verticalNumberOfCell) * Grid.cellSizeH + Grid.cellSizeH /2;
        
        return cellSymbol.place([x, y]);
    }
};

// Setting the canvas used to draw the simulation.
var canvas = document.getElementById("sim");
paper.setup(canvas);

// Creating the graphic representation of the cells.
var cellA = new paper.Path.Rectangle([0, 0], 30);
var cellASymbol = new paper.Symbol(cellA);
cellA.fillColor = "#000000";

var cellB = new paper.Path.Rectangle([0, 0], 30);
var cellBSymbol = new paper.Symbol(cellB);
cellB.fillColor = "#555555";

var cellC = new paper.Path.Rectangle([0, 0], 30);
var cellCSymbol = new paper.Symbol(cellC);
cellC.fillColor = "#aaaaaa";

// Setting the animation loop.
var onFrameHandler = function(event) {
    paper.view.draw();
};
paper.view.onFrame = onFrameHandler.bind(this);


// Initializing cells process.
makeCellProcess(cellASymbol, 2000, 15000);
makeCellProcess(cellBSymbol, 5000, 10000);
makeCellProcess(cellCSymbol, 4000, 30000);

