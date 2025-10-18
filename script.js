// Theme toggle + remember preference
const toggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme){
  if(theme === 'light'){
    body.style.setProperty('--bg', '#f6f9fb');
    body.style.setProperty('--card', '#ffffff');
    body.style.setProperty('--white', '#02121a');
    body.style.setProperty('--muted', 'rgba(0,0,0,0.6)');
    document.documentElement.style.background = '#f6f9fb';
    toggle.textContent = '🌙';
    body.classList.remove('dark');
  } else {
    // dark (default)
    body.style.removeProperty('--bg');
    body.style.removeProperty('--card');
    body.style.removeProperty('--white');
    body.style.removeProperty('--muted');
    document.documentElement.style.background = '';
    toggle.textContent = '☀️';
    body.classList.remove('dark');
  }
  localStorage.setItem('site-theme', theme);
}

toggle.addEventListener('click', ()=>{
  const current = localStorage.getItem('site-theme') === 'light' ? 'dark' : 'light';
  applyTheme(current);
});

// initialize
const saved = localStorage.getItem('site-theme') || 'dark';
applyTheme(saved);

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Parallax subtle effect on mouse move (for depth)
const bg = document.getElementById('bg-image');
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e)=>{
  const w = window.innerWidth, h = window.innerHeight;
  mouseX = (e.clientX - w/2) / (w/2);
  mouseY = (e.clientY - h/2) / (h/2);
  bg.style.transform = `scale(1.08) translate(${mouseX*6}px, ${mouseY*-6}px)`;
});
