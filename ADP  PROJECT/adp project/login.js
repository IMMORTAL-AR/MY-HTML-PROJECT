let email = "johndoe@example.com";
let password = "mypassword123";
console.log("Email: " + email);
console.log("Password: " + password);
function checkPassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  return true;
}
console.log("Password meets criteria: " + checkPassword(password));