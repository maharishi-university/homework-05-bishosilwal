export default class Meditation {
  constructor(public count: number) {}

  start() {
    for (let i = this.count; i > 0; i--) {
      this.printNumber(i).then((n) => {
        console.log(n);
      });
    }
    let endResult = new Promise((resolve, reject) => {
      resolve("Jay Guru Dev");
    });
    endResult.then((r) => {
      console.log(r);
    });
  }

  printNumber(i: number) {
    return new Promise((resolve, reject) => {
      resolve(i);
    });
  }
}
