const phrases = ["Chelsea Wu.", "A Designer.", "A Person.", "A Thing."];

async function startEngine() {
  await wait(2000);
  const chelsea = document.getElementById("chelsea");
  let wordIndex = 0;
  while (true) {
    await typeWord(phrases[wordIndex], chelsea);
    await wait(2000);
    await deleteWord(chelsea);
    await wait(1000);
    wordIndex = (wordIndex + 1) % phrases.length;
  }
}

async function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function typeWord(word: string, chelsea: HTMLElement) {
  return new Promise<void>((resolve, reject) => {
    if (!word) return reject();
    const charArray = word.split("");
    let curWord = "";

    const intervalId = setInterval(() => {
      if (charArray.length === 0) {
        clearInterval(intervalId);
        return resolve();
      }
      curWord += charArray.shift();
      chelsea.innerHTML = curWord;
    }, 100);
  });
}

async function deleteWord(chelsea: HTMLElement) {
  return new Promise<void>((resolve) => {
    const curWord = chelsea.innerHTML.split("");

    const intervalId = setInterval(() => {
      if (curWord.length === 0) {
        clearInterval(intervalId);
        return resolve();
      }
      curWord.pop();
      chelsea.innerHTML = curWord.join("");
    }, 100);
  });
}

startEngine();
