import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="group flex flex-col md:flex-row bg-[#FAFAF8] rounded-2xl shadow-lg p-6 border border-gray-200 gap-6 hover:shadow-xl transition-all duration-300">

      {/* IMAGE */}
      <div className="w-full md:w-auto shrink-0 overflow-hidden rounded-xl">
        <Link to={`/project/${projectSlug}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full md:max-w-[220px] object-cover shadow-sm group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">{project.title}</h1>

        <p className="text-gray-700 leading-relaxed mb-3 line-clamp-2">{project.description}</p>

        <p className="text-gray-500 text-sm italic mb-4">{project.extraInfo}</p>

        <Link 
          to={`/project/${projectSlug}`}
          className="text-blue-600 font-medium underline underline-offset-4 hover:opacity-80 text-left"
        >
          see project →
        </Link>
      </div>

    </div>
  );
};

export default ProjectCard;
