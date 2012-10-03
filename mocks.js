var MockPlayer = (function () {
    function MockPlayer(name) {
        this.name = name;
    };

    MockPlayer.prototype.hasActiveShips = function () {
        return true;
    }

    return MockPlayer;
})();

