
class Bank {
  constructor(balances) {
    this.balances = balances;
  }
  validateId(id) {
    return id >= 1 && id <= this.balances.length;
  }
  deposit(id, value) {
    if (!this.validateId(id)) {
      return false;
    }

    this.balances[id - 1] += value;
    return true;
  }
  withdraw(id, value) {
    if (!this.validateId(id)) {
      return false;
    }

    const balance = this.balances[id - 1];

    if (value > balance) {
      return false;
    }

    this.balances[id - 1] = balance - value;

    return true;
  }
  transfer(id1, id2, value) {
    if (!this.validateId(id1)) {
      return false;
    }

    if (!this.validateId(id2)) {
      return false;
    }

    const balance = this.balances[id1 - 1];

    if (value > balance) {
      return false;
    }

    this.balances[id1 - 1] -= value;
    this.balances[id2 - 1] += value;

    return true;
  }
}

const bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.withdraw(3, 10));
console.log(bank.transfer(5, 1, 20));
console.log(bank);
