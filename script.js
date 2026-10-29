// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme Toggle (Light / Dark mode)
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlEl = document.documentElement;

// Load stored theme or default to light
const savedTheme = localStorage.getItem('deekshith_theme') || 'light';
setTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
});

function setTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('deekshith_theme', theme);
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Copy to clipboard helper with toast notification
function copyText(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || 'Copied to clipboard!');
  }).catch(() => {
    // Fallback prompt if clipboard access is denied
    prompt('Copy this text:', text);
  });
}

// Toast notification helper
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}
