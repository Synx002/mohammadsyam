import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Works() {
    return (
        <div>
            <div className="w-full max-w-6xl mx-auto justify-center px-4 md:px-0 gap-4 mt-20">
                {/* <!-- Heading --> */}
                <h1 className="text-3xl md:text-4xl italic mb-6 font-pl">some project</h1>

                <div id="projects-container" className="space-y-8 max-w-4xl">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* <!-- FOOTER --> */}
            <footer className="w-full mt-20 py-8 border-t border-black/20 text-center">
                <p className="text-sm text-gray-700">
                    © 2025 Mohammad Syam — All rights reserved.
                </p>
            </footer>
        </div>
    )
}