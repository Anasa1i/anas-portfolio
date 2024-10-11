import { PROJECTS } from "../constants";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 className="my-20 text-center text-4xl font-bold">Projects</motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="flex flex-col h-full rounded-lg border shadow-lg transition-transform transform hover:scale-105 duration-200 ease-in-out">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="flex-grow p-4 flex flex-col">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mb-4 text-gray-600 flex-grow">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      className="mr-2 mb-2 rounded bg-stone-900 p-2 text-xs font-medium text-stone-300"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
