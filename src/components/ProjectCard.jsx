import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-3xl
        overflow-hidden transition-all duration-500 cursor-pointer
        hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_rgba(99,102,241,0.25)]"
      style={{
        /* Layer 1: base glass */
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow:
          "0 8px 32px rgba(31,38,135,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* Shimmer highlight (top-left glow) */}
      <div
        className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full
          opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.7) 0%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />

      

      {/* IMAGE */}
      <div className="relative w-full w-full md:w-[220px] md:h-[210px] shrink-0 overflow-hidden rounded-2xl
        shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
        {/* Glass sheen on image */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />
        <Link to={`/project/${projectSlug}`} className="block w-full h-full">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover
              group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </Link>
      </div>

      {/* TEXT */}
      <div className="relative z-10 flex flex-col justify-center">
        <h1
          className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800
            drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
        >
          {project.title}
        </h1>

        <p className="text-gray-600 leading-relaxed mb-2 line-clamp-2">
          {project.description}
        </p>

        <p className="text-gray-400 text-sm italic mb-5">{project.extraInfo}</p>

        <Link
          to={`/project/${projectSlug}`}
          className="group/link relative inline-flex items-center gap-1 w-fit
            text-white font-medium text-sm tracking-wide"
        >
          {/* Glass pill button */}
          <span
            className="relative px-4 py-1.5 rounded-xl transition-all duration-300
              group-hover/link:pr-6"
            style={{
              background: "#000",
              backdropFilter: "blur(10px)",
            }}
          >
            see project
            <span
              className="inline-block ml-1 transition-transform duration-300
                group-hover/link:translate-x-1"
            >
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;