const sentence = "hello there from lighthouse labs";
const sentenceNew = sentence + "\n";

for (const charIndex in sentenceNew) {
  setTimeout(() => {
    process.stdout.write(sentenceNew[charIndex]);
  }, charIndex * 50);
}