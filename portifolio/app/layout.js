import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Elynne Lima",
  description: "Portfólio pessoal de Elyyihz, desenvolvedora full-stack",
  keywords: "desenvolvedor, full stack, java, javascript",
  authors: [{ name: "Elynne Lima" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Elynne Lima. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}