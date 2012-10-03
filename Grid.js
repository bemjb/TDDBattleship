Battleship.Grid = (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
        this.ships = [ ];
    }

    Grid.prototype.placeShip = function (ship) {
        if (this._positionIsOutsideOfGrid(ship.position)) {
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

    Grid.prototype._queryTile = function (position) {
        var result = null;
        this.ships.forEach(function (ship) {
            if (ship.position.x === position.x && ship.position.y === position.y) {
                result = ship;
            }
            /*
            if (ship.position.x <= position.x && ship.position.y <= position.y) {
                if (ship.orientation === Battleship.Ship.Orientation.Vertical) {
                    if (ship.position.y - ship.size >= position.y) {
                        result = ship;
                    }
                }
                else { // (ship.orientation === Battleship.Ship.Orientation.Horizontal)
                    if (ship.position.x + ship.size >= position.x) {
                        result = ship;
                    }
                }
            }*/
        });
        return result;
    };

    return Grid;
})();
