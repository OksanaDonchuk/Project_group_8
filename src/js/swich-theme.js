const bodyRef = document.querySelector('body');
const switchButtonRef = document.getElementById('switch-theme');

const THEME_KEY_LS = 'theme';
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const themeStyles = {
  [THEMES.LIGHT]: {
    '--black': '#121417',
    '--gray': '#f3f5f6',
    '--white': '#fff',
    '--medium-green': '#bee8cc',
    '--dark-transparent': 'rgba(18, 20, 23, 0.5)',
    '--light-transparent': 'rgba(255, 255, 255, 0.5)',
  },

  [THEMES.DARK]: {
    '--black': '#fff',
    '--gray': '#000',
    '--white': '#121417',
    '--medium-green': '#4dc274',
    '--dark-transparent': 'rgba(255, 255, 255, 0.5)',
    '--light-transparent': '#000',
  },
};

const setCurrentTheme = theme => {
  Object.entries(themeStyles[theme]).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  bodyRef.classList.replace(
    theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
    theme
  );

  localStorage.setItem(THEME_KEY_LS, theme);
};

const toggleTheme = () => {
  const currentTheme = localStorage.getItem(THEME_KEY_LS) || THEMES.LIGHT;
  const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

  setCurrentTheme(newTheme);
};

const initialTheme = localStorage.getItem(THEME_KEY_LS) || THEMES.LIGHT;
setCurrentTheme(initialTheme);

switchButtonRef.addEventListener('click', toggleTheme);
