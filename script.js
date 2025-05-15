
function checkPassword() {
  const pwd = document.getElementById("password").value;
  const result = document.getElementById("result");

  let score = 0;

  if (pwd.length >= 8) score++;
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
