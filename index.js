
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

if sayHiToGrandma(string) === logWhisper(string) {
  console.log ("I can\'t hear you")
}
