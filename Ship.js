Battleship.Ship = (function () {
    function Ship(position, size, orientation) {
        this.position = position;
        this.size = size;
        this.orientation = orientation;
        if (this.orientation === Battleship.Ship.Orientation.Vertical) {
            this.endPosition = { x: this.position.x, y: this.position.y + size - 1 };
        }
        else {
            this.endPosition = { x: this.position.x + size - 1, y: this.position.y };
        }
    }

    Ship.Orientation = {
        Vertical: "Vertical",
        Horizontal: "Horizontal",
    };

    return Ship;
})();
