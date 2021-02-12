const csv = require("csv-parser");
const fs = require("fs");

// to run a task type in terminal node index.js

const alphabetArr = [];
var list = [];

fs.createReadStream("Alphabet.csv")
  .pipe(csv())
  .on("data", (row) => {
    //console.log(r);
    list.push(row);
  })
  .on("end", () => {
    let res = new Sorting(list);
    res.swaping();

    console.log("CSV file successfully processed");
  });
class Sorting {
  constructor(array) {
    this.list = array;
  }
  swaping() {
    this.list.filter(
      (item, i) => item.ParentID == 10 && item.isHidden == "True"
    );
    let swap = this.list.pop();
    this.list.splice(4, 0, swap);
    console.log(swap);
    this.sortingArr();
  }
  sortingArr() {
    let omega = this.list[9];
    this.list.splice(9, 1);
    this.list.splice(4, 0, omega);
    let counter = 5;
    let dot = ".";
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].ParentID == "NULL") {
        console.log(". " + this.list[i].ItemName);
      }
      if (this.list[i].ParentID == 1 || this.list[i].ParentID == 2) {
        if (this.list[i].ParentID == 2) {
          console.log("......" + this.list[i].ID + " " + this.list[i].ItemName);
        }
        if (this.list[i].ParentID == 1) {
          console.log("...." + this.list[i].ID + " " + this.list[i].ItemName);
        }
      }
      if (this.list[i].ParentID == 10 && this.list[i].isHidden == "False") {
        console.log("...." + this.list[i].ID + " " + this.list[i].ItemName);
      }
      if (this.list[i].ParentID > 10) {
        console.log(dot.repeat(counter + 1) + " " + this.list[i].ItemName);
        counter++;
      }
    }
  }
}
// this.list.filter((item, i) => item.ParentID == 10 && item.isHidden == "True");
// let swap = this.list.pop();
// this.list.splice(4, 0, swap);
// let omega = this.list[9];
// this.list.splice(9, 1);
// this.list.splice(4, 0, omega);
// let counter = 5;
// let dot = ".";
// for (let i = 0; i < this.list.length; i++) {
//   if (this.list)
//     if (this.list[i].ParentID == "NULL") {
//       console.log(". " + this.list[i].ItemName);
//     }
//   if (this.list[i].ParentID == 1 || this.list[i].ParentID == 2) {
//     if (this.list[i].ParentID == 2) {
//       console.log("......" + this.list[i].ID + " " + this.list[i].ItemName);
//     }
//     if (this.list[i].ParentID == 1) {
//       console.log("...." + this.list[i].ID + " " + this.list[i].ItemName);
//     }
//   }
//   if (this.list[i].ParentID == 10 && this.list[i].isHidden == "False") {
//     console.log("...." + this.list[i].ID + " " + this.list[i].ItemName);
//   }
//   if (this.list[i].ParentID > 10) {
//     console.log(dot.repeat(counter + 1) + " " + this.list[i].ItemName);
//     counter++;
//   }
// }
