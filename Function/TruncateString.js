function truncateString(str, num){
  if(str.length > num){
    const sub = str.slice(num, str.length);
    return str.replace(sub, "...");
  }

  return str;
}

console.log(truncateString("Ciao", 2));