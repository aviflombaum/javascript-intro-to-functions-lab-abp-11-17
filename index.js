

function shout(word){
  return word.toUpperCase();
}

function whisper(word){
  return word.toLowerCase()
}

function logShout(word){
  console.log(word.toUpperCase())
}

function logWhisper(word){
  console.log(word.toLowerCase())
}


function sayHiToGrandma(phrase){
  // how do we know if a string is in lowercase?
  if (phrase.toUpperCase() === phrase){
    return "YES INDEED!"
  } else {
    "I can't hear you!"
  }
}

