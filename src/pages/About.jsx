export default function About() {
    return (
        <div className="w-full max-w-6xl mx-auto justify-center px-4 md:px-0 gap-4 mt-20">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl italic mb-6 font-pl">
                About Mohammad Syam Caturputra
            </h1>
            <p className="text-gray-700 mb-8">
                (I also go by <span className="italic font-medium">Sam</span> sometimes.)
            </p>

            {/* Content */}
            <div className="space-y-6 leading-relaxed text-[15px] md:text-base">
                <p>
                    I love building simple, clean, and user-friendly websites while
                    learning new things along the way. I&apos;m still early in my web
                    development journey, but I love exploring new tech, improving my
                    skills, and working with people who share the same passion. For me,
                    every project is a chance to grow, try ideas, and make something
                    useful for others.
                </p>

                <p>
                    Between 2024 and 2025, I worked at several different companies. The
                    changes weren’t because I’m a Gen Z who jumps around, but mainly
                    because some of the companies were going through difficult situations
                    and I was asked to resign due to their internal challenges. These past
                    few years have been tough for me to build a stable career in this
                    field, but I’m still here, learning, improving, and trying my best to
                    move forward.
                </p>

                <p>
                    For now, after resigning, I want to focus on completing my game
                    development course. At the same time, I’m planning to build my own
                    small business while exploring new job opportunities.
                </p>
            </div>

            {/* Call To Action */}
            <div className="mt-10">
                <h2 className="text-lg font-semibold mb-2">Want to work with me?</h2>
                <p className="text-gray-700">
                    If you have an exciting project, idea, or role to share, feel free to
                    send me an email :)
                </p>
                <a href="mailto:mosyam0202@gmail.com" className="block mt-4 text-black underline underline-offset-4 hover:opacity-70">
                    mosyam0202@gmail.com
                </a>

                <a href="https://wa.me/6281392800526" className="block mt-1 text-black underline underline-offset-4 hover:opacity-70"
                    target="_blank" rel="noopener noreferrer">
                    +6281392800526
                </a>
            </div>
        </div>
    )
}
