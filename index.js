// Snippet to restrict js array:
//
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }
const bucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let remainder = 16;

class HashMap {
  // Todo - Question:
  // Implement array with linked list here?
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

  get(key) {
    const keyHashed = this.hash(key) % remainder;
    return bucket[keyHashed];
    // Todo:
    // When key is not found, return null
  }

  has(key) {
    const keyHashed = this.hash(key) % remainder;
    // I need to track the keys, not just the 16 hashes
    // Not sure if i got the assignment right
  }

  remove(key) {
    // Same problem, see method above
  }

  length() {
    let zeroCount = 0;

    bucket.forEach((element) => {
      if (element !== 0) {
        zeroCount++;
      }
    });

    return zeroCount;
  }

  clear() {
    bucket.forEach((element, index) => {
      bucket[index] = 0;
    });
  }

  keys() {
    // Same problem, see methods above
  }

  values() {
    const values = [];

    bucket.forEach((element) => {
      if (element !== 0) {
        values.push(element);
      }
    });

    return values;
  }

  entries() {
    // Same problem, see methods above
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

console.log("Return value for 'Bozo'...");
console.log(map.get("Bozo"));

console.log(`Stored keys in the array: ${map.length()}`);

console.log("Set key 'Peter' to 'lame'...");
map.set("Peter", "lame");
console.log(bucket);

console.log("Get an array with all the values...");
console.log(map.values());

console.log("Clearing bucket...");
map.clear();

console.log(`Stored keys in the array: ${map.length()}`);
