const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const result = document.getElementById("result");



// Check for a palindrome
function isPalindrome() {
  const cleaned = userInput.value.toLowerCase().replace(/[^a-z0-9]/g, ""); // [^] これは否定、^[] これは先頭を指定
  // メソッドは連結できる
  const reversed = cleaned.split("").reverse().join("");
  
  return cleaned === reversed; // booleanを返すときはifなしで条件だけ書く
}


// Activate btn
checkBtn.addEventListener("click", showResult);

// Update result msg
function showResult() {
  if(userInput.value === "") {
    alert("Please input a value");
    return
  }
  
  result.style.display = "block";
  return result.textContent = isPalindrome() ?
  `${userInput.value} is a palindrome` :
  `${userInput.value} is not a palindrome`;
}

