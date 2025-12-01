const roles = ["web developer", "ui designer", "game developer"];
let index = 0;

const roleEl = document.getElementById("role");

// Jalankan changeRole hanya jika #role ditemukan (Home)
if (roleEl) {
  function changeRole() {
    // Fade-out
    roleEl.classList.add("opacity-0", "translate-y-2");

    setTimeout(() => {
      // Ganti teks
      roleEl.textContent = roles[index];

      // Fade-in
      roleEl.classList.remove("opacity-0", "translate-y-2");

      index = (index + 1) % roles.length;
    }, 700);
  }

  changeRole();
  setInterval(changeRole, 2500);
}

// =============================
// PAGE TRANSITION (SEMUA HALAMAN)
// =============================

// add enter animation
document.body.classList.add("page-enter");
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.add("page-enter-active");
  });
});

// intercept link click for smooth exit animation
document.querySelectorAll("a").forEach((link) => {
  const url = link.getAttribute("href");

  // skip external links
  if (
    !url ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("https://wa.me") ||
    url.startsWith("#")
  )
    return;

  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.body.classList.add("page-exit");
    requestAnimationFrame(() => {
      document.body.classList.add("page-exit-active");
    });

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  });
});
