const predictions = [
  "It is certain",
  "Signs point to yes",
  "Absolutely",
  "Outlook is good",
  "Ask me again, differently",
  "It is unclear",
  "Do not count on it",
  "Outlook is bad",
  "It's a hard no",
  "Won't happen",
];

// const getAnswer = Math.floor(Math.random() * predictions.length);

function getAnswer() {
  //return predictions[Math.floor(Math.random() * predictions.length)];
  const number = Math.floor(Math.random() * predictions.length);

  const prediction = predictions[number];

  return prediction;
}

function setResponseText() {
  document.getElementById("response").innerHTML = getAnswer();
}
