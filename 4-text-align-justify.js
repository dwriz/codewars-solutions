/*
https://www.codewars.com/kata/537e18b6147aa838f600001b/
*/

function justify(text, width) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = [];

  for (const word of words) {
    if (
      currentLine.join(" ").length +
        word.length +
        (currentLine.length ? 1 : 0) >
      width
    ) {
      lines.push(currentLine);
      currentLine = [];
    }
    currentLine.push(word);
  }
  if (currentLine.length) {
    lines.push(currentLine);
  }

  const justifiedLines = lines.map((line, index) => {
    if (index === lines.length - 1) {
      return line.join(" ");
    }
    let totalSpaces = width - line.join("").length;
    let gaps = line.length - 1;
    let spaceWidth = Math.floor(totalSpaces / gaps);
    let extraSpaces = totalSpaces % gaps;

    return line.reduce((acc, word, i) => {
      if (i === line.length - 1) {
        return acc + word;
      }
      let spaces = " ".repeat(spaceWidth + (i < extraSpaces ? 1 : 0));
      return acc + word + spaces;
    }, "");
  });

  return justifiedLines.join("\n");
}
