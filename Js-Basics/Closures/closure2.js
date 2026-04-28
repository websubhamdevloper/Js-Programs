function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log("Counter counting:");
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function createSmartCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

let smartCounter = createSmartCounter();
console.log("Increment:", smartCounter.increment());
console.log("Increment:", smartCounter.increment());
console.log("Increment:", smartCounter.increment());
console.log("Decrement:", smartCounter.decrement());
console.log("Get Counter:", smartCounter.getCount());
console.log("reset:", smartCounter.reset());

function createCounterWithStart(startValue) {
  let count = startValue;
  return {
    next: function () {
      return ++count;
    },
    current: function () {
      return count;
    },
  };
}

let counter10 = createCounterWithStart(10);
console.log("Next:", counter10.next());
console.log("Next:", counter10.next());
console.log("Current Value:", counter10.current());

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  let transactions = [];

  return {
    deposit: function (amount) {
      balance += amount;
      transactions.push({
        type: "Deposit",
        amount: amount,
      });
      return "Deposited: $" + amount + ", Balance: $" + balance;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      transactions.push({
        type: "Withdraw",
        amount: amount,
      });
      return "Withdraw: $" + amount + ", Balance: $" + balance;
    },
    getBalance: function () {
      return balance;
    },
    getTransactions: function () {
      return transactions;
    },
  };
}

let account = createBankAccount(1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.withdraw(5000));
console.log("final balance:", account.getBalance());
console.log("Transactions:", account.getTransactions());

