import fs from 'fs';

// 내가 만든 것
class Fetch {
  #args;
  #fileName;
  #data;
  constructor(args) {
    this.#args = args;
    this.#fileName = `${this.#args[2]}.json`;
  }

  validate() {
    if (!this.#args) {
      throw new Error('파일 이름을 입력하세요');
    }
    if (!fs.existsSync(this.#fileName)) {
      throw new Error('파일이 존재하지 않습니다');
    }
  }

  fetch() {
    this.validate();
    this.#data = JSON.parse(fs.readFileSync(this.#fileName));
  }

  display() {
    const filtered = this.#args.includes('-r')
      ? this.#data.filter((order) => order.status === 'ready')
      : this.#data;
    console.log(filtered.length);
  }
}

const fetch = new Fetch(process.argv);
fetch.fetch();
fetch.display();

// 강의에서 한 것
run(process.argv);

function run(args) {
  countOrders(parseCommand(args));
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  return {
    fileName,
    countReadyOnly: args.includes('-r'),
  };
}

function countOrders({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);

  return countReadyOnly
    ? orders.filter((order) => order.status === 'ready').length
    : orders.length;
}
