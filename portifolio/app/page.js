"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MessageCircle} from "lucide-react"

export default function Home() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
  fetch("https://api.quotable.io/random?tags=technology|moivacional")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Resposta da API não foi OK");
      }
      return response.json();
    })
    .then((data) => {
      setQuote(data.quote);
      setAuthor(data.author);
    })
    .catch((error) => {
      console.error("Erro ao buscar citação:", error);
      setQuote("A tecnologia é melhor quando aproxima as pessoas.");
      setAuthor("Matt Mullenweg");
    });
}, []);


  return (
    <div className="min-h-screen bg-gray-50">

      <section className="container mx-auto px-15 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/ mb-10 lg:mb-5">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Olá, eu sou
              <span className="text-blue-600 block">Elynne Lima</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
             Analista de Dados e Desenvolvedora Full-Stack curiosa, detalhista, em constante evolução e apaixonada por criar, aprender e inovar.
            </p>
            <div className="flex space-x-4">

              <a
                href="https://github.com/elyyihz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/elynnelima/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>

               <a
                href="https://wa.me/81986267563?text=Olá, tudo bem? Vim pelo seu Portifolio!"
                className="bg-green-600 text-white p-3 rounded-full hover:bg-green-500 transition-colors duration-200"
              >
                <MessageCircle size={24} />
              </a>

              <a
                href="mailto:elynnelima@email.com"
                className="bg-red-600 text-white p-3 rounded-full hover:bg-green-500 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>

            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="/Foto.jpg"
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-xl py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 italic mb-6">"{quote}"</blockquote>
            <cite className="text-lg text-blue-600 font-semibold">— {author}</cite>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Principais Tecnologias</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Next.js", "JavaScript", "Python", "PostgreSQL", "Java", "SpringBoot"].map((tech) => (
              <div
                key={tech}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="font-semibold text-gray-800">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}