window.addEventListener('DOMContentLoaded', () => {
  const themeSelectorButton = document.querySelector('.theme-selector');

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    themeSelectorButton.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    themeSelectorButton.setAttribute('data-theme', 'light');
  }

  themeSelectorButton.addEventListener('click', () => {
    const hasDarkClass = document.documentElement.classList.contains('dark');
    if (!hasDarkClass) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      themeSelectorButton.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      themeSelectorButton.setAttribute('data-theme', 'light');
    }
  });

  const navLinks = document.querySelectorAll('nav .nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
