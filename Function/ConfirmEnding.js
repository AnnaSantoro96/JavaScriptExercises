function confirmEnding(str1, str2) {
  const str2Length = str2.length;
  const subStr1 = str1.slice(str1.length - str2Length, str1.length);

  if (subStr1 == str2) {
    return true;
  }

  return false;
}

console.log(confirmEnding("Bastian", "n"));