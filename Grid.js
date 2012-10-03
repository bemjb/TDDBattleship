Battleship.Grid = (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
        this.ships = [ ];
    }

    Grid.prototype.placeShip = function (ship) {
        if (this._positionIsOutsideOfGrid(ship.position) ||
            this._positionIsOutsideOfGrid(ship.endPosition) ||
            this._shipAtPosition(ship.position)) {
            return false;
        }
        else {
            this.ships.push(ship);
            return true;
        }
    };

    Grid.prototype._positionIsOutsideOfGrid = function (position) {
        var positionIsOutsideOfGrid = position.x > this.width || position.y > this.height ||
                                        position.x < 1 || position.y < 1;
        return positionIsOutsideOfGrid;
    };

    Grid.prototype._shipAtPosition = function (position) {
        var result = null;
        this.ships.forEach(function (ship) {
            if (ship.position.x === position.x && ship.position.y === position.y) {
                result = ship;
            }
        });
        return result;
    };
                   
   Grid.prototype.render = function () {

        this.ships.forEach(function (ship) {
            var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", ship.position.x);
            rect.setAttribute("y", ship.position.y);
            rect.setAttribute("width", "1");
            rect.setAttribute("height", "1");
            rect.setAttribute("fill", "gray");
            document.getElementById("grid").appendChild(rect);
        });
   }

    return Grid;
})();
