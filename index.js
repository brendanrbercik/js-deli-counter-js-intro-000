var line = [];

function takeANumber (line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing (line) {
  while (line.length > 0) {
    return(`Currently serving ${line.shift()}.`);
  }
    return ("There is nobody waiting to be served!");
}


function currentLine (line) {
  do {
    return ("The line is currently empty.");
  } while (line.length === 0);

var currentList = [];

  for (let i = 0; i < line.length < i++) {
    currentList.push("${i+=1} + $list[i]");
  }

  }
