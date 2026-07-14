const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(str + " added to the end of the lunch menu.");
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(str + " added to the start of the lunch menu.");
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedItem = arr.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);

  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedItem = arr.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);

  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return arr;
  }

  const elementoCasuale = arr[Math.floor(Math.random() * arr.length)];
  console.log(`Randomly selected lunch: ${elementoCasuale}`);
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return arr;
  }

  console.log(`Menu items: ${arr.join(", ")}`);
  return arr;
}