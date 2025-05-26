import { GraduationCap, Award, Calendar } from "lucide-react"

export default function ExperienciaAcademica() {
  const education = [
    {
      type: "Técnico",
      title: "Técnico em Comunicação Visual",
      institution: "ETE - Miguel Batista",
      period: "2021 - 2023",
      description: "Formação focada em design gráfico, composição visual e criação de soluções visuais criativas e funcionais.",
      
      status: "Concluído",
    },
    {
      type: "Graduação",
      title: "Técnologo em Sistemas para Internet",
      institution: "Universidade Católica de Pernambuco",
      period: "2024 - 2026",
      description: "Formação sólida em algoritmos, engenharia de software e desenvolvimento web.",
      status: "Em andamento",
    },
  ]

  const courses = [
    {
      title: "Java - Programação Orientada a Objetos",
      institution: "Udemy",
      year: "2025",
      hours: "54h",
    },
    {
      title: "Formação Full-Stack",
      institution: "RocketSeat",
      year: "2025",
      hours: "90h",
    },
    {
      title: "SQL para Análise de Dados: Do básico ao avançado",
      institution: "Udemy",
      year: "2025",
      hours: "6h",
    },
  ]
  
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Experiência Acadêmica</h1>


          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
              <GraduationCap className="mr-2" />
              Formação Acadêmica
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
                        {edu.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{edu.title}</h3>
                      <p className="text-lg text-blue-600">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm ${
                          edu.status === "Concluído" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Cursos Complementares</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-blue-600 mb-2">{course.institution}</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>{course.year}</span>
                    <span>{course.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}