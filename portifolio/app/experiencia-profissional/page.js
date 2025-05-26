import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperienciaProfissional() {
  const experiences = [
    {
      position: "Jovem Aprendiz",
      company: "Mackenzie Agnes",
      location: "Recife, PE",
      period: "Abril 2024 - Presente",
      type: "Meio Perioso",
      description: [
        "Apoio na criação de conteúdo para redes sociais",
        "Atualização de murais e informativos internos",
        "Auxílio em campanhas internas",
        "Edição de imagens e vídeos",
        "Organização de arquivos e documentos",
      ],
      technologies: ["Pacote Office", "Figma", "Canva", "Trello", "Adobe"],
    },
    {
      position: "Residente",
      company: "CETEC",
      location: "Recife, PE",
      period: "Agosto 2024 - Junho 2025",
      type: "Meio periodo",
      description: [
        "Desenvolvimento de interfaces responsivas e interativas com React",
        "Experiência prática com robótica educacional e aplicações de inteligência artificial (IA).",
        "Fortalecimento de habilidades de trabalho em equipe, colaboração e comunicação.",
        "Implementação de testes unitários e de integração",
        "Envolvimento direto em atividades de resolução de problemas, estimulando pensamento crítico e criatividade.",
        "Participação na gestão de projetos voltados à inovação educacional.",
        "Coleta de dados e estudo de campo para idealização de uma startup com foco em soluções para desafios enfrentados por crianças com Transtorno do Espectro Autista (TEA) na educação.",
      ],
      technologies: ["Coreographe", "JavaScript", "Python", "REST APIs", "Vite" , "React.js" , "Git", "Trello"],
    },
    {
      position: "Residente",
      company: "Porto Digital",
      location: "Recife, PE",
      period: "Março 2024 - Junho 2024",
      type: "Meio periodo",
      description: [
        "Participação ativa na gestão de projetos voltados ao empreendedorismo com impacto socioambiental.",
        "Prototipação de soluções com foco na criação de uma startup voltada ao combate da crise climática.",
        "Desenvolvimento de soft skills (comunicação, colaboração, liderança) e hard skills (ferramentas digitais, design, pesquisa).",
        "Criação de logotipo, site e materiais de apresentação, utilizando ferramentas como Adobe Illustrator e Figma.",
        "Realização de coleta de dados e estudo de mercado para validação da proposta da startup.",
        "Prática constante de trabalho em equipe, com foco em inovação, organização e divisão de tarefas.",
        "Desenvolvimento de estratégias criativas para a resolução de problemas reais, aplicando pensamento crítico e visão de impacto.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Adobe", "Figma", "Trello", "Pacote Office" ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Experiência Profissional</h1>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h2>
                    <h3 className="text-xl text-blue-600 mb-2">{exp.company}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4">
                      <div className="flex items-center mr-4 mb-2 sm:mb-0">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center mr-4 mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 lg:ml-4">
                    <Briefcase size={24} />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Principais Responsabilidades:</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tecnologias Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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