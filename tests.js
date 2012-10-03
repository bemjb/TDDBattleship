(function () {
    var game;
    module("Game Tests", {
        setup: function () {
            game = new Battleship.Game();
            game.players = [ new MockPlayer("Player 1"), new MockPlayer("Player 2") ];
        },
        teardown: function () {
            game = null;
        }
    });
    test("Started Game in Ship Placement", function() {
        equal(game.state, Battleship.Game.State.ShipPlacement, "Check state");
    });
    test("Whose Turn is it initially?", function() {
        equal(game.activePlayer(), game.players[0]);
    });
    test("Does turn advance properly?", function () {
        game.finishTurn();
        equal(game.activePlayer(), game.players[1]);
    });
    test("Does turn wrap around properly?", function () {
        var index;
        for (index = 0; index < game.players.length; index++) {
            game.finishTurn();
        }
        equal(game.activePlayer(), game.players[0]);
    });
    test("Is the game over?", function () {
        // Mocks
        game.players[1].hasActiveShips = function () {
            return false;
        };

        //Test
        game.finishTurn();
        equal(game.state, Battleship.Game.State.GameOver, "Check state");
    });
})();

(function () {
    var player;
    module("Player Tests", {
        setup: function () {
            player = new Battleship.Player("Player 1");
        },
        teardown: function () {
            player = null;
        }
    });
    test("Player name is set", function () {
        equal(player.name, "Player 1");
    });
    test("Player starts with active ships", function () {
        ok(player.hasActiveShips());
    });
})();
