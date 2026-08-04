import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "./common/Button";
import Title from "./common/Title";
import { allProjects } from "../constants/projects";

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className="group grid items-start gap-7 lg:grid-cols-12 lg:gap-12 xl:gap-16"
  >
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-[#101827] shadow-2xl shadow-black/20 lg:col-span-6
         ${index % 2 === 1 ? "lg:order-2" : ""}`}
    >
      <img
        src={`./images/projects/${project.img}`}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </div>

    <div
      className={`flex flex-col lg:col-span-6`}
      //  ${
      //     index % 2 === 1 ? "lg:order-1" : ""
      //   }
    >
      <h3 className="text-primary-text text-2xl font-medium mb-5">
        <span className="text-accent font-mono mr-2 tracking-wider">
          {String(index + 1).padStart(2, "0")}.
        </span>
        {project.title}
      </h3>{" "}
      <p className="text-secondary-text text-[15px] leading-relaxed flex-1 mb-5">
        {project.description}
      </p>
      {project.tools && project.tools.length > 0 && (
        <ul
          className="mb-7 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-sm border border-white/10 bg-white/[0.06] px-2 py-[3px] text-xs text-secondary-text transition-colors duration-200 group-hover:border-accent/20 group-hover:text-primary-text"
            >
              {tool}
            </li>
          ))}
        </ul>
      )}
      <Button
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        className="w-max font-normal"
        aria-label={`View code for ${project.title} on GitHub`}
      >
        View Code
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          aria-hidden="true"
          className="ml-1 text-[14px]"
        />
      </Button>
    </div>
  </motion.article>
);

const Projects = () => (
  <section id="projects" className="bg-primary-bg py-20 lg:py-28">
    <div className="mx-auto max-w-[1320px] px-6 md:px-12">
      <Title>Some Things I've Built</Title>

      <div className="space-y-20 lg:space-y-28 mt-12">
        {allProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
