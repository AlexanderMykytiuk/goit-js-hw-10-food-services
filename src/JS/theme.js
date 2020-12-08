
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

const refs = {
    bodyTheme: document.querySelector('body'),
    btnTheme: document.querySelector('#theme-switch-toggle'),
}

function bodyThemeChangeDark() {
    if (refs.btnTheme.checked) {
        refs.bodyTheme.classList.remove(Theme.LIGHT)
        refs.bodyTheme.classList.add(Theme.DARK)
        localStorage.setItem('theme', Theme.DARK)
    } else {
        refs.bodyTheme.classList.remove(Theme.DARK)
        refs.bodyTheme.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

    function setInitialTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.btnTheme.checked = true;
    refs.bodyTheme.classList.add(Theme.DARK);
  }
}

  setInitialTheme();
  refs.btnTheme.addEventListener('change', bodyThemeChangeDark);  

