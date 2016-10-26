function chance(amount) {
  return Math.random() > amount;
}

module.exports = function () {

  var info = {
    name: "CrazyRoboMatt"
  };

  function update(game) {
    var wager;
    if (game.state !== "complete") {
      var wager = game.betting.call
      switch(game.state) {
      case 'pre-flop':
        if (chance(0.7)) wager = game.betting.raise
        break;
      case 'flop':
        if (chance(0.7)) wager = game.betting.raise
        break;
      case 'turn':
        if (chance(0.7)) wager = game.betting.raise
        break;
      case 'river':
        if (chance(0.7)) wager = game.betting.raise
        break;
      }
      return wager;
    }
  }

  return { update: update, info: info }

}