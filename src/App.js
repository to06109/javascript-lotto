const { COMMAND } = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');
const CreateLotto = require('./CreateLotto');
const { MoneyExceptions } = require('./Exceptions');

class App {
  constructor() {
    this.lottoArr = [];
    this.winningArr = [];
    this.bonus = 0;
  }

  play() {
    this.getUserMoney();
  }

  getUserMoney() {
    Console.readLine(COMMAND.MONEY, (money) => {
      new MoneyExceptions(money).check();
      this.lottoArr = new CreateLotto(money).make();
      this.getWinning();
    });
  }

  getWinning() {
    Console.readLine(COMMAND.WINNING, (winning) => {
      this.winningArr = winning.split(',').map((num) => parseInt(num));
      this.getBonus();
    });
  }

  getBonus() {
    Console.readLine(COMMAND.BONUS, (bonus) => {
      this.bonus = bonus;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
