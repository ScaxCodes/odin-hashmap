// Snippet to restrict js array:
//
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }
const bucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let remainder = 16;

class HashMap {
  constructor() {}

  hash(str) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < str.length; i++) {
      hashCode = primeNumber * hashCode + str.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value = 0) {
    const keyHashed = this.hash(key) % remainder;
    console.log(`Select bucket ${keyHashed}`);
    bucket[keyHashed] = value;
    console.log("Inserting value...");
    // Todo:
    // Overwrite old value when key already exists
    // Implement bucket growing when load factor is reached
  }
}

// Testing the script...
console.log("Creating HashMap...");
const map = new HashMap();

console.log("Hashing 'Bozo'...");
console.log(map.hash("Bozo"));

console.log("Set key 'Bozo' to 'cool'...");
map.set("Bozo", "cool");
console.log(bucket);
