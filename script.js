// ─── JAM REALTIME ───────────────────────────────────────
function updateClock() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) el.textContent = h + ':' + m;
}
updateClock();
setInterval(updateClock, 10000);

// ─── SPLASH → HOME ──────────────────────────────────────
setTimeout(() => {
  document.getElementById('splash').style.display = 'none';
  const home = document.getElementById('home');
  home.style.display = 'flex';
  home.classList.add('fade-in');
}, 2200);

// ─── TAMPILKAN SET LOKASI JEMPUT ────────────────────────
function showPickupLocation() {
  document.getElementById('home').style.display = 'none';
  const pickup = document.getElementById('pickup-location');
  pickup.style.display = 'flex';
  pickup.classList.add('fade-in');
}

// ─── KEMBALI KE HOME ────────────────────────────────────
function backToHome() {
  document.getElementById('pickup-location').style.display = 'none';
  const home = document.getElementById('home');
  home.style.display = 'flex';
  home.classList.add('fade-in');
}

// ─── MULAI CARI DRIVER ──────────────────────────────────
function startSearch() {
  document.getElementById('home').style.display = 'none';
  if(document.getElementById('pickup-location')) {
    document.getElementById('pickup-location').style.display = 'none';
  }

  const searching = document.getElementById('searching');
  searching.style.display = 'flex';
  searching.classList.add('fade-in');

  const messages = [
    "Menghubungi server cinta... 💌",
    "Membangunkan Dev yang lagi rebahan...",
    "Menyiapkan helm & jaket buat Diba...",
    "Mengecek rute paling romantis... 🗺️",
    "Hampir ketemu nih..."
  ];

  let i = 0;
  const textEl = document.getElementById('search-text');

  function nextMsg() {
    if (i < messages.length) {
      textEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = messages[i];
        textEl.style.opacity = '1';
        i++;
        setTimeout(nextMsg, 1600);
      }, 300);
    } else {
      showResult();
    }
  }

  nextMsg();
}

// ─── TAMPILKAN HASIL ────────────────────────────────────
function showResult() {
  document.getElementById('searching').style.display = 'none';

  const result = document.getElementById('result');
  result.style.display = 'flex';
  result.classList.add('fade-in');
}

// ─── TOMBOL CHAT ────────────────────────────────────────
function chatDriver() {
  // Ganti "628XXXXXXXXXX" dengan nomor WhatsApp kamu
  const phoneNumber = "6281366931586";
  const message = encodeURIComponent("Halo Dev! Aku nunggu di depan ya.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ─── TOMBOL BATAL ───────────────────────────────────────
function cancelOrder() {
  window.location.reload();
}

// ─── MENU SALAH ─────────────────────────────────────────
function wrongMenu() {
  alert('Pilih "Jalan Bareng Dev" aja ya Diba! 😜');
}
