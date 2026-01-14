import { useState, useEffect } from "react";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

export default function Home() {
    const roles = ["web developer", "web designer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("opacity-0 translate-y-2");

    useEffect(() => {
        // Initial fade in
        const initialTimeout = setTimeout(() => {
            setFadeClass("opacity-100 translate-y-0");
        }, 100);

        const interval = setInterval(() => {
            // Fade out
            setFadeClass("opacity-0 translate-y-2");

            setTimeout(() => {
                // Change role and fade in
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFadeClass("opacity-100 translate-y-0");
            }, 700); // Wait for transition to finish (700ms)

        }, 1500); // Total cycle time

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div
                className="min-h-screen w-full max-w-6xl mx-auto flex flex-col justify-center px-4 md:px-0 gap-4"
            >
                <h1 className="italic text-[48px] md:text-[72px] leading-none font-pl">
                    Mohammad Syam
                </h1>

                <p className="text-base md:text-lg">
                    A passionate junior&nbsp;
                    <span
                        className={`inline-block transition-all duration-700 ${fadeClass}`}
                    >
                        {roles[currentRoleIndex]}
                    </span>
                </p>

                <div className="flex space-x-4 text-xl md:text-2xl">
                    <a href="#" target="_blank">
                        <img
                            src={githubIcon}
                            alt="GitHub"
                            className="w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition"
                        />
                    </a>

                    <a href="#" target="_blank">
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition"
                        />
                    </a>

                    <a href="#" target="_blank">
                        <img
                            src={instagramIcon}
                            alt="Instagram"
                            className="w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
