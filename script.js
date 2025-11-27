const roles = ["web developer", "ui designer", "game developer"];
let index = 0;

const roleEl = document.getElementById("role");

function changeRole() {
    // Fade-out + slide-down
    roleEl.classList.add("opacity-0", "translate-y-2");

    setTimeout(() => {
        // Ganti teks
        roleEl.textContent = roles[index];

        // Fade-in + slide-up
        roleEl.classList.remove("opacity-0", "translate-y-2");

        index = (index + 1) % roles.length;

    }, 700); // harus sama dengan duration-700
}

changeRole();
setInterval(changeRole, 2500);
