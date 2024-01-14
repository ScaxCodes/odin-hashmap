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
    for (let i = 0; i < value.str; i++) {
      hashCode = primeNumber * hashCode + str.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const keyHashed = this.hash(key) % remainder;
    console.log(`Select bucket ${keyHashed}`);
  }
}
// Nicht mit Kleinigkeiten aufhalten, mache die Lösung wie du es kannst, vergleiche es dann mit anderen
