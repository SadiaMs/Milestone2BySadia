import Image from "next/image";
import React from "react";


const projects = [
  {
    title: "Figma templete",
    description:
      "A web UI design using Figma .",
    link: "/projects/resume-builder",
    technologies: ["Figma"],
    Image: "/my figma.png", // Add 
  },
  {
    title: "Dynamic Resume Builder",
    description:
      "A web application for building Dynamic resumes using TypeScript .",
    link: "/projects/resume-builder",
    technologies: ["React", "TypeScript", "CSS"],
  Image: "/18.png", // image
  },
  {
    title: "Editable Resume Builder",
    description:
      "A modern, interactive restaurant website built with HTML, CSS, and JavaScript.",
    link: "https://milestone4-tau.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    Image: "/15.png", // image 
  },
  {
    title: "Shareable Resume Builder",
    description:
      "A web application for building shareable and editable resumes using TypeScript and jsPDF.",
    link : "https://milestone4-tau.vercel.app/",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
    Image: "/16.png", // image path
  },
  {
    title: "Canva Templete",
    description:
      "I create an UI templete in Canva.",
    link: "/",
    technologies: ["Canva"],
    Image: "/MOATAR WEBSITE.png", // image path
  },
  {
    title: "Contact US Form",
    description:
      "I create a contact us form using html,css,typescript.",
    link: "/12.png",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
    Image: "/Screenshot 2024-12-19 163102.png", // image path
  },
  {
    title: "Figma To Nextjs",
    description:
      "An AI-powered tool for generating stunning images, integrated with APIs for creativity.",
    link: "https://haci3figma.vercel.app/",
    technologies: ["Next.js", "Figma", "Tailwind CSS"],
    Image: "/14.png", //  image
  },
  {
    title: "Travelling Parallex website UI",
    description:
      "I create a travelling parallex website for creativity.",
    link: "/12.png",
    technologies: ["HTML", "CSS", "Typescript"],
    Image: "/12.png", // image path
  },
  {
    title: "The Carribbean Life Website UI",
    description:
      "A parallex website UI design.",
    link: "/12.png",
    technologies: ["HTML", "CSS", "Typescript"],
    Image: "/17.png", //image path
    
  },
 

];

const Project = () => {
  return (
    <section id="projects" className="py-12 bg-green-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6 hover:underline">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Here are some of the exciting projects I have worked on:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lime-500 transition-shadow duration-300 "
            >
              {/* Image Section */}
              <Image width={400} height={400}
                src={project.Image}
                alt={project.title}
                className="w-full h-45 object-cover"
              />
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-green-600 hover:text-green-800 font-medium"
                >
                  View Project &rarr;
                </a>
              </div> image
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
;
