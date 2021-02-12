const textFormatWords =
  "She sells seashells by the seashore, the shells she sells are seashells, I am sure. So if she sells seashells on the seashore, then I am sure she sells seashore shells.";

const splitedText = textFormatWords.toLowerCase().split(" ");
//Solution One console is displayed

let repeatedWords = [];
let counter = 0;
for (let i = 0; i < splitedText.length; i++) {
  if (repeatedWords.includes(splitedText[i])) {
    continue;
  }
  for (let j = i; j < splitedText.length + 1; j++) {
    if (splitedText[i] == splitedText[j + 1]) {
      repeatedWords.push(splitedText[i]);
    }
  }
}
console.log(repeatedWords);
repeatedWords.sort();
let count2 = 0;
var temp;
for (let i = 0; i < repeatedWords.length; i++) {
  for (let j = 0; j < repeatedWords.length; j++) {
    if (repeatedWords[j] == repeatedWords[i]) {
      temp = repeatedWords[i];
      count2++;
    }
  }
  console.log(temp + " -> " + (count2 + 1));
  count2 = 0;
}

//Solution Two on HTML is Displayed

const textFormatWords2 =
  "She sells seashells by the seashore, the shells she sells are seashells, I am sure. So if she sells seashells on the seashore, then I am sure she sells seashore shells.";

const splitedText2 = textFormatWords2.toLowerCase().split(" ");
splitedText2.sort();

var current = null;
var cnt = 0;
for (var i = 0; i < splitedText2.length; i++) {
  if (splitedText2[i] != current) {
    if (cnt > 0) {
      document.write(current + " --- comes --> " + cnt + " times<br>");
    }
    current = splitedText2[i];
    cnt = 1;
  } else {
    cnt++;
  }
}
if (cnt > 0) {
  document.write(current + " comes --> " + cnt + " times");
}
