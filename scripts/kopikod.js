// 1. Cari navigation
const navMain = document.getElementById('nav-main');

// 2. Cari URL sekarang
const currentUrl = window.location.pathname;

// 3. Tambahkan class btn-primary pada navigation sekarang
if (currentUrl.includes('dashboard')) {
  navMain.children[0].classList.add('btn-primary');
} else if (currentUrl.includes('books')) {
  navMain.children[1].classList.add('btn-primary');
} else if (currentUrl.includes('orders')) {
  navMain.children[2].classList.add('btn-primary');
} else if (currentUrl.includes('logistics')) {
  navMain.children[3].classList.add('btn-primary');
}