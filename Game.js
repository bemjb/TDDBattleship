Battleship.Game = (function () {
    function Game() {
        this.players = [ ];
        this.state = Game.State.ShipPlacement;
    };

    Game.State = {
        ShipPlacement: "ShipPlacement",
        Combat: "Combat",
        GameOver: "GameOver"
    };

    return Game;
})();
