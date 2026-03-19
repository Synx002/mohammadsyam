import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-pl italic mb-4">Project not found</h1>
                <button
                    onClick={() => navigate('/works')}
                    className="text-blue-600 underline"
                >
                    Back to Works
                </button>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl mx-auto px-4 md:px-0 mt-20 pb-20"
        >
            {/* Back Button */}
            <button
                onClick={() => navigate('/works')}
                className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-12"
            >
                <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                <span className="font-medium">Back to projects</span>
            </button>

           

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
                {/* Detail Info */}
                <div className="md:col-span-2">
                    <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-4">About this project</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {project.detailInfo}
                    </p>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-4">Links</h2>
                        {project.webUrl && project.webUrl !== "/" ? (
                            <a
                                href={project.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl transition-all shadow-lg shadow-black/10"
                            >
                                Live Website
                                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                            </a>
                        ) : (
                            <span className="text-gray-400 italic text-sm">No link available</span>
                        )}
                    </section>

                    {project.techStack && (
                        <section>
                            <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Mockup / Image Section */}
            {project.imageUrls && project.imageUrls.length > 0 && (
                <section className="mb-20">
                    <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-6">Preview</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {project.imageUrls.map((img, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-100"
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} Mockup ${index + 1}`}
                                    className="block w-full h-auto max-w-full"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-gray-400 italic text-center">
                        — {project.title} interface previews
                    </p>
                </section>
            )}

            {/* Footer */}
            <footer className="w-full mt-4 py-8 border-t border-black/20 text-center">
                <p className="text-sm text-gray-700">
                    © 2025 Mohammad Syam — All rights reserved.
                </p>
            </footer>
        </motion.div>
    );
}
