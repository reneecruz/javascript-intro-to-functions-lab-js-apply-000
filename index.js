var uppercase = "HELLO!"
var lowercase = 'hello!'


function shout(string) {
  return(string.toUpperCase());
}

function whisper(string) {
  return(string.toLowerCase());
}

function sayHiToGrandma(string) {
  
  if (string.toLowerCase() === lowercase) {
  return 'I can\'t hear you!'
  }
  else if (string.toUpperCase() === uppercase) {
  return "YES INDEED!"
  }
  else (string === "I love you, Grandma.") {
  return "I love you, too."
  }
}


function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}