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

//Googled to execute function on pressing enter key - addEventListener for enter key - without querySelector - could setRseponseText go inside?
//include if field is empty - make errorMessage.innerText = "There was no question"
document.addEventListener("keypress", function (event) {
  if ("Enter" === event.key) {
    if (document.getElementById("predict").value) {
      console.log("enter has been pressed");
      document.getElementById("predict");
      console.log(document.getElementById("predict"));
      setResponseText();
    } else {
      console.log("Write something");
      alert("You havent written your question");
    }
  }
});

function setResponseText() {
  const responseText = document.getElementById("response");
  responseText.innerHTML = getAnswer();
  //Timeout Reanimate block
  //responseText.classList.remove("animate");
  //setTimeout(function () {
  //  responseText.classList.add("animate");
  //});
  //console.log("setresponse return")

  //Reflow animation block
  //responseText.classList.remove("animate");
  //void responseText.offsetWidth;
  //responseText.classList.add("animate");

  const cloneResponseText = responseText.cloneNode(true);
  responseText.parentNode.replaceChild(cloneResponseText, responseText);
}

// error is not returned when button is clicked, only enter event
