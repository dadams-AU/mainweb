let themeSwitchers = document.querySelectorAll('.theme');
themeSwitchers.forEach((btn) => {
  btn.addEventListener('click', function () {
    let chosenTheme = this.getAttribute('data-theme');
    document.body.className = chosenTheme;
    localStorage.setItem('userThemePreference', chosenTheme);
  });
});

let colorSwitchers = document.querySelectorAll('.color-options li');
colorSwitchers.forEach((btn) => {
  btn.addEventListener('click', function () {
    let chosenColor = this.getAttribute('data-color');
    let colorStyle = document.getElementById('colorStyle');
    colorStyle.href = chosenColor + '.css';
    localStorage.setItem('userColorPreference', chosenColor);
  });
});

window.onload = function () {
  let userThemePreference = localStorage.getItem('userThemePreference');
  if (userThemePreference === 'dark') {
    document.body.className = userThemePreference;
  } else {
    document.body.className = '';
  }

  let userColorPreference = localStorage.getItem('userColorPreference');
  if (userColorPreference) {
    let colorStyle = document.getElementById('colorStyle');
    colorStyle.href = userColorPreference + '.css';
  }
}
