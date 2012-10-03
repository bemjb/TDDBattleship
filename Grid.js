Battleship.Grid = (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
        this.ships = [ ];
    }

    Grid.prototype.placeShip = function (ship) {
        this.ships.push(ship);
        return true;
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
