import tekadHero from '../assets/tekadHero.webp';
import myTaxHero from '../assets/myTaxHero.webp';
import daikhHero from '../assets/daikhHero.webp';
import kaboHero from '../assets/kaboHero.webp';
import selasarHero from '../assets/selasarHero.webp';
import keepifyHero from '../assets/keepifyHero.webp';
import tekadMockup1 from '../assets/tekaddetail1.webp';
import tekadMockup2 from '../assets/tekaddetail2.webp';
import tekadMockup3 from '../assets/tekaddetail3.webp';
import tekadMockup4 from '../assets/tekaddetail4.webp';
import mytaxdetail1 from '../assets/mytaxdetail1.webp';
import mytaxdetail2 from '../assets/mytaxdetail2.webp';
import mytaxdetail3 from '../assets/mytaxdetail3.webp';
import daikhdetail1 from '../assets/daikhdetail1.webp';
import daikhdetail2 from '../assets/daikhdetail2.webp';
import daikhdetail3 from '../assets/daikhdetail3.webp';
import daikhdetail4 from '../assets/daikhdetail4.webp';
import kabodetail1 from '../assets/kabodetail1.webp';
import kabodetail2 from '../assets/kabodetail2.webp';
import kabodetail3 from '../assets/kabodetail3.webp';
import kabodetail4 from '../assets/kabodetail4.webp';
import selasardetail1 from '../assets/selasardetail1.webp';
import selasardetail2 from '../assets/selasardetail2.webp';
import selasardetail3 from '../assets/selasardetail3.webp';
import selasardetail4 from '../assets/selasardetail4.webp';

// import myTaxMockup from '../assets/mytaxentirepage.png';
// import daikhMockup from '../assets/daikhentirepage.png';
// import kaboMockup from '../assets/kaboentirepage.png';
// import keepifyMockup from '../assets/keepifyentirepage.png';

const projects = [
    {
        title: "Tekadverse",
        description:
            "my sibling had this awesome idea for a digital comic agency, so naturally i got roped into building the website now it's live and full of artsy comic energy!",
        extraInfo:
            "all the web dev magic (aka: coding, debugging, crying at 2am) was done by me! super proud of how it turned out .",
        imageUrl: tekadHero,
        webUrl: "https://tekadverse.id/",
        detailInfo: "My sibling had this awesome idea for a digital comic agency, so I built the website — now it's live and packed with artsy comic energy.\n\nBeyond the landing page, I developed a custom project management system to handle task assignments, track progress, and manage artist payment withdrawals.\n\nIt's not just a showcase site, but a fully functional system built to support smooth collaboration and scalable growth.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Express", "MySQL"],
        imageUrls: [
            tekadMockup1,
            tekadMockup2,
            tekadMockup3,
            tekadMockup4,
        ],
    },
    {
        title: "My Tax Indonesia",
        description:
            "my very first job experience! i didn't build the whole thing, but i do keep the website alive and looking fresh mostly handling UI stuff and squashing bugs before they bite ",
        extraInfo:
            "this is where i learned the joys of 'maintenance mode'—aka reading someone else's code and trying not to cry. UI updates? done. weird layout bugs? also done. proud to be part of it!",
        imageUrl: myTaxHero,
        webUrl: "https://mytax.co.id/",
        detailInfo: "My very first job experience! I didn't build the whole system, but I keep the website alive and looking fresh by handling UI updates, fixing weird layout bugs, and squashing issues before they become bigger problems.\n\nThis is where I truly learned the joys of maintenance mode — reading someone else's code, understanding the structure, and improving it without breaking anything.\n\nProud to be part of it and growing through the process.",
        techStack: ["PHP", "MySQL", "Bootstrap", "MVC"],
        imageUrls: [
            mytaxdetail1,
            mytaxdetail2,
            mytaxdetail3,
        ],
    },
    {
        title: "Daikh & Co",
        description:
            "started with a template, gave it a glow-up helped build and update the UI for this stylish site—now it looks way cooler than it did before ",
        extraInfo:
            "no shame in the template game! i tweaked, tuned, and transformed the design to match the brand's vibe. lots of UI polishing, color picking, and the occasional css battle",
        imageUrl: daikhHero,
        webUrl: "https://daikhnco.com/",
        detailInfo: "Started with a template, then gave it a proper glow-up. I helped build and update the UI for Daikh & Co — a stylish brand site that needed to look and feel as refined as the products it represents.\n\nNo shame in the template game! I tweaked, tuned, and transformed the design to match the brand's vibe. That meant a lot of UI polishing, thoughtful color picking, and the occasional CSS battle to get things pixel-perfect.\n\nThe result is a site that feels intentional and on-brand — way cooler than where it started.",
        techStack: ["PHP", "MySQL", "Bootstrap"],
        imageUrls: [
            daikhdetail1,
            daikhdetail2,
            daikhdetail3,
            daikhdetail4,
        ],
    },
    {
        title: "Kabo",
        description:
            "my very first freelance gig! built it with WordPress + sprinkled in some GSAP magic for smooth animations it used to look super slick... until they changed the UI",
        extraInfo:
            "i was in charge of the full setup and animation work—learned a lot about client work, WordPress quirks, and how to make things move nicely on scroll. it's changed since, but hey, it was mine once!",
        imageUrl: kaboHero,
        webUrl: "https://kabo.id/",
        detailInfo: "My very first freelance gig! I built the Kabo website from scratch using WordPress and sprinkled in some GSAP magic for smooth scroll animations — and it looked super slick.\n\nI was in charge of the full setup: theme customization, animation work, and making sure everything moved nicely on scroll. Learned a lot about client work, WordPress quirks, and delivering something that actually looks good.\n\nThe design has since been changed by the client, but hey — it was mine once, and I'm proud of what it was.",
        techStack: ["WordPress", "GSAP", "JavaScript", "CSS"],
        imageUrls: [
            kabodetail1,
            kabodetail2,
            kabodetail3,
            kabodetail4,
        ],
    },
    {
        title: "Keepify",
        description:
            "a passion project i'm currently building with a friend an app designed to make item storage and safekeeping feel simple, modern, and stress-free.",
        extraInfo:
            "i handle the frontend side—designing the UI, building reusable components, and making sure everything feels smooth and intuitive. still in progress, but we're shaping it with lots of care, late-night commits, and big ideas",
        imageUrl: keepifyHero,
        webUrl: "/",
        detailInfo: "A passion project I'm currently building with a friend — Keepify is an app designed to make item storage and safekeeping feel simple, modern, and stress-free.\n\nI handle the entire frontend side: designing the UI, building reusable components, and making sure everything feels smooth and intuitive for the user.\n\nStill in progress, but we're shaping it with lots of care, late-night commits, and big ideas. The goal is to create something genuinely useful and polished.",
        techStack: ["NextJs", "TypeScript", "Tailwind CSS", "NestJs", "MySQL"],
    },
    {
        title: "Selasar Kafe",
        description:
            "a mobile point-of-sale app built for a café environment to simplify transactions, product management, and daily operations",
        extraInfo:
            "i developed the entire system end-to-end—from designing the UI to implementing the backend and database structure. the goal was to build a reliable and easy-to-use POS system that helps staff manage orders, products, and sales efficiently.",
        imageUrl: selasarHero,
        webUrl: "/",
        detailInfo: "Selasar Kafe POS is a mobile point-of-sale application designed to support café operations with a modern and efficient workflow.\n\nThe app allows cashiers to quickly process transactions, manage products, track sales history, and monitor stock levels directly from a mobile device.\n\nOne of the key features is tenant management, which allows the system to handle multiple tenants or vendors within the same platform. Each tenant can manage their own products, transactions, and reports independently.\n\nI developed the system end-to-end — from designing the UI, building reusable components in React Native, to implementing the backend logic and database integration. The application is connected to a real-time backend to ensure that transaction data, stock updates, and tenant data remain synchronized.\n\nThe goal of this project is to create a practical POS solution that is scalable, easy to use for staff, and flexible enough to support multi-tenant business environments.",
        techStack: [
            "React Native",
            "Expo",
            "TypeScript",
            "Supabase",
            "PostgreSQL"
        ],
        imageUrls: [
            selasardetail1,
            selasardetail2,
            selasardetail3,
            selasardetail4,
        ],
    }

];

export default projects;
