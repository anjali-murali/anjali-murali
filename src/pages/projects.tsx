// pages/projects.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { NextPage } from 'next';
import { projectCardContent, projectsPageHeader } from '../../content/projectsContent';
import { PORTFOLIO_OWNER_NAME } from '../../content/siteConfig';

interface Project {
  title: string;
  type: string;
  githubLink?: string;
  imageSrc: string;
  details: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[70vw] h-[70vh] max-h-[80vh] overflow-y-auto relative">
      <button
        className="absolute top-4 right-4 text-white py-1 px-3 hover:text-gray bg-blue-500 rounded-full transition-colors z-50"
        onClick={onClose}
      >
        x
      </button>
      <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
      <p className="text-gray-500 mt-2">{project.type}</p>
      {project.githubLink && (
        <p className="mt-2">
          GitHub: <a href={project.githubLink} className="text-blue-500 hover:underline">{project.githubLink}</a>
        </p>
      )}
      <div className="relative h-[70%]">
        <Image src={project.imageSrc} alt={project.title} width={800} height={600} className="w-full h-full object-contain" />
      </div>
      <ul className="list-disc list-inside space-y-2">
        {project.details.map((detail: string, index: number) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectPage: NextPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="mx-auto mt-8 px-4 md:px-8">
      <Head>
        <title>{projectsPageHeader}</title>
      </Head>
      <h1 className="text-4xl font-bold mt-[7.5vh] mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectCardContent.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105 relative w-full h-full overflow-hidden"
            onClick={() => openModal(project.id)}
          >
            <div className="border-2 border-gray-500 rounded-md p-1 absolute inset-0" />
            <div className="h-[300px] overflow-hidden relative">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100">
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject !== null && (
        <ProjectModal project={projectCardContent[selectedProject - 1]} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProjectPage;
