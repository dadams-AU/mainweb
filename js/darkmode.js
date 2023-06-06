document.addEventListener('DOMContentLoaded', (event) => {
  const checkbox = document.getElementById('themeSwitch');
  // Check for saved 'darkMode' in localStorage
  let darkMode = localStorage.getItem('darkMode'); 

  const enableDarkMode = () => {
    // Add the class to the body
    document.body.classList.add('dark');
    // Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
  }

  const disableDarkMode = () => {
    // Remove the class from the body
    document.body.classList.remove('dark');
    // Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
  }

  if (darkMode === 'enabled') {
    enableDarkMode();
  }

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      darkMode = localStorage.getItem('darkMode'); 
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {  
        disableDarkMode(); 
      }
    });
  }
});
