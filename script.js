document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const passwordBtn = document.getElementById('checkPasswordBtn');
  const passwordResult = document.getElementById('result');

  passwordBtn.addEventListener('click', () => {
    const pwd = passwordInput.value;
    let score = 0;
    if (pwd.length >= 9) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/\W/.test(pwd)) score++;

    let strength;
    if (score <= 1) strength = 'Very Weak';
    else if (score === 2) strength = 'Weak';
    else if (score === 3) strength = 'Strong';
    else strength = 'Very Strong';

    passwordResult.textContent = `Password strength: ${strength}`;
  });

  const urlInput = document.getElementById('siteUrl');
  const siteBtn = document.getElementById('checkSiteBtn');
  const siteOutput = document.getElementById('siteResult');

  siteBtn.addEventListener('click', () => {
    const url = urlInput.value;

    // Temporary hardcoded logic (replace with an API call later)
    if (url.includes('facebook') || url.includes('google')) {
      siteOutput.textContent = 'Safe';
      siteOutput.style.color = 'green';
    } else if (url.includes('free-money') || url.includes('click-here')) {
      siteOutput.textContent = 'Dangerous';
      siteOutput.style.color = 'red';
    } else {
      siteOutput.textContent = 'Suspicious — use caution';
      siteOutput.style.color = 'orange';
    }
  });
});

