class Organization {
  #name;
  #country;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get rawData() {
    return { ...this.#data }; // 얕은 복사, cloneDepp
  }
}

const organization = new Organization('Acme Gooseberries', 'GB');

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
