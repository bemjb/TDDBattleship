Battleship.Game = (function () {
    function Game() {
        this.players = [ ];
        this.state = Game.State.ShipPlacement;
        this.activePlayerIndex = 0;
    };

    Game.State = {
        ShipPlacement: "ShipPlacement",
        Combat: "Combat",
        GameOver: "GameOver"
    };

    Game.prototype.activePlayer = function () {
        return this.players[this.activePlayerIndex];
    };

    Game.prototype.finishTurn = function () {
        this.activePlayerIndex = (this.activePlayerIndex + 1) % this.players.length;

        if (!this.players[this.activePlayerIndex].hasActiveShips()) {
            this.state = Game.State.GameOver;
        }
    };

    return Game;
})();
