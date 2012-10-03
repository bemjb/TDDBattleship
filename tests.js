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

(function () {
    var grid;
    module("Grid Tests", {
        setup: function () {
            grid = new Battleship.Grid(10, 10);
        },
        teardown: function () {
            grid = null;
        }
    });
    test("Add ship to grid", function () {
        var ship = new MockShip();
        ok(grid.placeShip(ship), "Ship was successfully placed");
        equal(grid._queryTile({ x: 1, y: 1 }), ship);
    });
    test("Reject ship outside of grid", function () {
        var ship = new MockShip();
        ship.position = { x: 11, y: -1 };
        ship.endPosition = { x: 11, y: -1 };
        ok(!grid.placeShip(ship), "Ship could not be placed");
    });
    test("Ensure position is in grid", function () {
        ok(grid._positionIsOutsideOfGrid({ x: 0, y: 0}), "below lower bound");
        ok(grid._positionIsOutsideOfGrid({ x: 11, y: 11}), "above upper bound");
        ok(!grid._positionIsOutsideOfGrid({ x: 1, y: 1}), "lower bound");
        ok(!grid._positionIsOutsideOfGrid({ x: 10, y: 10}), "upper bound");
    });
    test("Reject ship with end outside of grid", function () {
        var ship = new MockShip();
        ship.position = { x: 1, y: 1 };
        ship.endPosition = { x: 11, y: 1 };
        ok(!grid.placeShip(ship), "Ship could not be placed");
    });
})();
