export default function Sobre() {
  const technologies = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "TailwindCSS"],
    },
        {
      category: "APIs Externas",
      items: ["Quotable API", "GitHub API", "WhatsApp API"],
    },
    {
      category: "Ferramentas e Outros",
      items: ["Git", "GitHub", "Vercel"],
    },

  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Sobre o Projeto</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Descrição do Site</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Este site foi desenvolvido como um portfólio pessoal interativo, utilizando tecnologias
              web. O projeto demonstra habilidades em desenvolvimento frontend, integração com APIs externas e
              implementação de jogos interativos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O design responsivo garante uma experiência otimizada em todos os dispositivos, desde smartphones até
              desktops, utilizando TailwindCSS para estilização moderna e eficiente.
            </p>
          </div>

          <div className="grid gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">{tech.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-100 px-3 py-2 rounded-md text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Funcionalidades Implementadas</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Design responsivo com TailwindCSS</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Navegação dinâmica com Next.js App Router</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Integração com API externa (Quotable API para citações)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Jogo interativo Bulls and Cows implementado em React</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Componentes reutilizáveis e código modular</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}