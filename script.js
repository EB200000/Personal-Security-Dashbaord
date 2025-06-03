
function checkPassword() {
  const pwd = document.getElementById("password").value;
  const result = document.getElementById("result");

  let score = 0;

  if (pwd.length >= 9) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[\W]/.test(pwd)) score++;

  let strength;
  if (score <= 1) strength = "Very Weak";
  else if (score === 2) strength = "Weak";
  else if (score === 3) strength = "Strong";
  else strength = "Very Strong";

  result.textContent = `Password strength: ${strength}`;
}
function checkSite() {
  const url = document.getElementById("siteUrl").value;
  const output = document.getElementById("siteResult");

  // Temporary hardcoded logic (you’ll replace this with an API call later)
  if (url.includes("facebook") || url.includes("google")) {
    output.textContent = " Safe";
    output.style.color = "green";
  } else if (url.includes("free-money") || url.includes("click-here")) {
    output.textContent = " Dangerous";
    output.style.color = "red";
  } else {
    output.textContent = " Suspicious — use caution";
    output.style.color = "orange";
  }
}

