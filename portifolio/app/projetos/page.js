import { ExternalLink, Github, Calendar, Code } from "lucide-react"

export default function Projetos() {
  const projects = [
    {
      title: "Conversor",
      description:
        "Plataforma de Conversão",
      technologies: ["Next.js", "React", "JavaScript", "CSS", "TailwindCSS"],
      githubUrl: "https://github.com/Elyyihz/Conversor",
      liveUrl: "https://conversor-two-olive.vercel.app/",
      date: "Mai 2025",
      status: "Concluído",
    },
    {
      title: "Jogos de Dados",
      description:
        "Aplicação Web para um jogo de dados para duas pessoas.",
      technologies: ["React", "Next.js", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Elyyihz/ProgramacaoFrontEnd-2025.1",
      liveUrl: "https://jogo-dado-02.vercel.app/",
      date: "Out 2025",
      status: "Concluído",
    },
    {
      title: "Luma",
      description:
        "Site com Dashboard para organização e administração dos teatros de Recife.",
      technologies: ["JavaScript", "Chart.js", "CSS"],
      githubUrl: "https://github.com/gabssiin/Projeto-Web-2024.2",
      liveUrl: "https://projeto-web-2024-2.vercel.app/",
      date: "Dez 2024",
      status: "Concluído",
    },
        {
      title: "Cinemavalia",
      description:
        "Site para avaliação de filmes e series da cultura brasileira.",
      technologies: ["CSS", "HTML"],
      githubUrl: "https://github.com/Elyyihz/Cinemavalia",
      liveUrl: "https://projeto-final-gray.vercel.app/",
      date: "Jul 2024",
      status: "Concluído",
    },
   
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Projetos Desenvolvidos</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Uma seleção dos meus principais projetos e contribuições
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="absolute top-7 right-35">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-medium ${
                        project.status === "Concluído" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-5 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <Code size={16} className="mr-1" />
                      Tecnologias:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200 text-sm"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}