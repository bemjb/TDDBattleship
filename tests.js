module("Game Tests");
test( "Started Game in Ship Placement", function() {
    var game = new Battleship.Game();
    game.players = [ { }, { } ];
    equal(game.state, Battleship.Game.State.ShipPlacement, "Check state");
});
