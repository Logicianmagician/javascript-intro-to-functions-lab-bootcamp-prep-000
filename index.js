function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  return string
}

if sayHiToGrandma("hello") {
  console.log("I can\'t hear you!")
}

if sayHiToGrandma("HELLO") {
  console.log("YES INDEED!")
}

if sayHiToGrandma("I love you, Grandma.") {
  console.log("I love you, too")
}