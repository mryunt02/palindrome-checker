const result = document.querySelector("#result");
let valueinput = document.querySelector("#text-input").value;
let str = "";
function emptyInput() {
  if (str === "") {
    alert("Please input a value");
  }
  else {
    if (isPalindrome(str)) {
      result.textContent = `${str} is a palindrome `
    }
    else {
      result.textContent = `${str} is not a palindrome `

    }

  }

}
function updateValue(e) {
  str = e.target.value;

}
function isPalindrome(str) {
  let name_parsed = str.replace(/[^0-9a-zA-Z ]/g, '');
  name_parsed = name_parsed.replace(/ /g, '')

  let reversed = name_parsed.split('').reverse().join('');
  if (name_parsed.toLowerCase() === reversed.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }

}
document.querySelector("#check-btn").addEventListener('click', emptyInput)
document.querySelector("#text-input").addEventListener("change", updateValue)
