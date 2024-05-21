const form = document.querySelector('[data-form]');
const passwordFields = document.querySelectorAll('input[type="password"]');

// Check for matching passwords when confirm password field loses focus
passwordFields[1].addEventListener('focusout', e => {
  if (passwordFields[0].value !== passwordFields[1].value) {
    passwordFields.forEach(passwordField => {
      passwordField.setCustomValidity('Passwords must match!');
    });
  } else {
    passwordFields.forEach(passwordField => {
      passwordField.setCustomValidity('');
    })
  }
});