/* =========================================================
   ROLE TEXT ANIMATION (Home page only)
========================================================= */
const roles = ["web developer", "ui designer", "game developer"];
let index = 0;
const roleEl = document.getElementById("role");

function changeRole() {
  if (!roleEl) return; // aman kalau bukan di halaman home

  roleEl.classList.add("opacity-0", "translate-y-2");

  setTimeout(() => {
    roleEl.textContent = roles[index];
    roleEl.classList.remove("opacity-0", "translate-y-2");
    index = (index + 1) % roles.length;
  }, 700);
}

if (roleEl) {
  changeRole();
  setInterval(changeRole, 2500);
}

/* =========================================================
   PAGE TRANSITION (smooth enter + exit)
========================================================= */
document.body.classList.add("page-enter");
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.add("page-enter-active");
  });
});

// intercept internal links
document.querySelectorAll("a").forEach((link) => {
  const url = link.getAttribute("href");
  if (
    !url ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("https://wa.me") ||
    url.startsWith("#") ||
    url.startsWith("http")
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

/* =========================================================
   PROJECTS DATA + CARD GENERATOR (Works page)
========================================================= */
const projects = [
  {
    title: "Tekadverse",
    description:
      "my sibling had this awesome idea for a digital comic agency, so naturally i got roped into building the website 😅 now it’s live and full of artsy comic energy!",
    extraInfo:
      "all the web dev magic (aka: coding, debugging, crying at 2am) was done by me! super proud of how it turned out 💻✨.",
    imageUrl: "../assets/images/tekadHero.png",
    webUrl: "https://synx002.github.io/tekadverse-2024/",
  },
  {
    title: "My Tax Indonesia",
    description:
      "my very first job experience! i didn’t build the whole thing, but i do keep the website alive and looking fresh ✨ mostly handling UI stuff and squashing bugs before they bite 🐛💥",
    extraInfo:
      "this is where i learned the joys of ‘maintenance mode’—aka reading someone else’s code and trying not to cry. UI updates? done. weird layout bugs? also done. proud to be part of it!",
    imageUrl: "../assets/images/myTaxHero.png",
    webUrl: "https://mytax.co.id/",
  },
  {
    title: "Daikh & Co",
    description:
      "started with a template, gave it a glow-up ✨ helped build and update the UI for this stylish site—now it looks way cooler than it did before 😎",
    extraInfo:
      "no shame in the template game! i tweaked, tuned, and transformed the design to match the brand's vibe. lots of UI polishing, color picking, and the occasional css battle 💅💻",
    imageUrl: "../assets/images/daikhHero.png",
    webUrl: "https://daikhnco.com/",
  },
  {
    title: "Kabo",
    description:
      "my very first freelance gig! built it with WordPress + sprinkled in some GSAP magic for smooth animations ✨ it used to look super slick... until they changed the UI 😢",
    extraInfo:
      "i was in charge of the full setup and animation work—learned a lot about client work, WordPress quirks, and how to make things move nicely on scroll. it’s changed since, but hey, it was mine once!",
    imageUrl: "../assets/images/kaboHero.png",
    webUrl: "https://kabo.id/",
  },
];

/* =========================================================
   RENDER PROJECT CARDS (Works page only)
========================================================= */
const container = document.getElementById("projects-container");

if (container) {
  projects.forEach((project) => {
    const card = `
  <div class="flex flex-col md:flex-row bg-[#FAFAF8] rounded-2xl shadow-lg p-6 border border-gray-200 gap-6">

    <!-- IMAGE -->
    <div class="w-full md:w-auto flex-shrink-0">
      <img 
        src="${project.imageUrl}" 
        alt="${project.title}" 
        class="w-full md:max-w-[220px] object-cover shadow-sm rounded-xl" 
      />
    </div>

    <!-- TEXT -->
    <div class="flex flex-col justify-center">
      <h1 class="text-2xl md:text-3xl font-semibold mb-2">${project.title}</h1>

      <p class="text-gray-700 leading-relaxed mb-3">${project.description}</p>

      <p class="text-gray-500 text-sm italic mb-4">${project.extraInfo}</p>

      <a href="${project.webUrl}"
         target="_blank"
         class="text-blue-600 font-medium underline underline-offset-4 hover:opacity-80">
        see project →
      </a>
    </div>

  </div>
`;

    container.innerHTML += card;
  });
}
