Battleship.Player = (function () {
    function Player(name) {
        this.name = name;
    }

    Player.prototype.hasActiveShips = function () {
        return true;
    };

    return Player;
})();
