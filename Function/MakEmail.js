function maskEmail(email) {
  let parts = email.split("@");
  let username = parts[0];
  let domain = parts[1];

  let masked =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];

  return masked + "@" + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));