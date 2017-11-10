

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
  var x = (if (phrase.toUpperCase() === phrase){
     "YES INDEED!"
  } else if ("I love you, Grandma." === phrase){
     "I love you, too."
  } else {
     "I can't hear you!"
  })
  return x
}
