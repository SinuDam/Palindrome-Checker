function checkPalindrome() {
  const input = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');

  const cleaned = input
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '');

  const reversed = cleaned.split('').reverse().join('');

  if (cleaned && cleaned === reversed) {
    resultDiv.textContent = '✅ Palindrome';
    resultDiv.style.color = 'green';
  } else {
    resultDiv.textContent = '❌ Not a Palindrome';
    resultDiv.style.color = 'red';
  }

  resultDiv.classList.add('show');
}
