class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = new AccountType(type, interestRate);
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}
