var MockPlayer = (function () {
    function MockPlayer(name) {
        this.name = name;
    };

    MockPlayer.prototype.hasActiveShips = function () {
        return true;
    }

    return MockPlayer;
})();

var MockShip = (function () {
    function MockShip() {
        this.size = 1;
        this.position = { x: 1, y: 1 };
        this.endPosition = { x: 1, y: 1 };
        this.orientation = Battleship.Ship.Orientation.Vertical;
    };

    return MockShip;
})();
