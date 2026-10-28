const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.play().catch(() => {});
}

const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
navLinks.addEventListener('click', () => navLinks.classList.remove('open'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const audio = document.getElementById('bgAudio');
audio.volume = 0.25;
document.querySelector('.text-link').addEventListener('click', () => {
  audio.play().catch(() => {});
});

const processData = {
  1: ['INT. WARUNG SEKOLAH — SIANG', 'Gagasan & penulisan naskah', 'Dito mengadu Budi, Rani ketakutan, Siska memberi dorongan, dan tantangan malam menuju toilet tua pun dimulai.', '01 / 03'],
  2: ['EXT. SEKOLAH — MALAM', 'Produksi & perekaman', 'Adegan direkam dari gerbang, koridor, ruang guru, lorong, sampai pengejaran Pakujati sambil membawa sapu.', '02 / 03'],
  3: ['INT. TOILET TUA — MALAM', 'Editing & plot twist', 'Suara mencekam, timing komedi, lampu kedip-kedip, dan pengungkapan Pakujati dirangkai menjadi klimaks yang absurd.', '03 / 03']
};
const processPanel = document.getElementById('processPanel');
document.querySelectorAll('.timeline-step').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.timeline-step').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const data = processData[button.dataset.step];
    processPanel.innerHTML = `<div><span class="mono">${data[0]}</span><h3>${data[1]}</h3><p>${data[2]}</p></div><div class="process-mark mono">${data[3]}</div>`;
  });
});
