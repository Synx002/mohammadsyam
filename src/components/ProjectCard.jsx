const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FAFAF8] rounded-2xl shadow-lg p-6 border border-gray-200 gap-6">

      {/* IMAGE */}
      <div className="w-full md:w-auto flex-shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full md:max-w-[220px] object-cover shadow-sm rounded-xl"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">{project.title}</h1>

        <p className="text-gray-700 leading-relaxed mb-3">{project.description}</p>

        <p className="text-gray-500 text-sm italic mb-4">{project.extraInfo}</p>

        <a href={project.webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium underline underline-offset-4 hover:opacity-80">
          see project →
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;