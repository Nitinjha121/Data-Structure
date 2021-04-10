class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  #hash(key) {
    let total = 0;
    const weired_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * weired_prime + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this.#hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this.#hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let [keys, val] of this.keyMap[index]) {
      if (key === keys) return val;
    }
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (keys.includes(this.keyMap[i][j][0])) continue;
        keys.push(this.keyMap[i][j][0]);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (values.includes(this.keyMap[i][j][1])) continue;
        values.push(this.keyMap[i][j][1]);
      }
    }

    return values;
  }
}

const hash = new HashTable(2);

hash.set("white", "#ffffff");
hash.set("black", "#000000");
hash.set("grey", "#cccccc");

// console.log(hash);
// console.log(hash.get("black"));
console.log(hash.keys());
console.log(hash.values());
