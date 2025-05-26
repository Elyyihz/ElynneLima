"use client"

import { useState, useEffect } from "react"
import { RefreshCw, Eye, Target } from "lucide-react"

export default function Jogo() {
  const [secretCode, setSecretCode] = useState("")
  const [guess, setGuess] = useState("")
  const [attempts, setAttempts] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [maxAttempts] = useState(10)

  const generateSecretCode = () => {
    const digits = []
    while (digits.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString()
      if (!digits.includes(digit)) {
        digits.push(digit)
      }
    }
    return digits.join("")
  }

  const initGame = () => {
    setSecretCode(generateSecretCode())
    setGuess("")
    setAttempts([])
    setGameOver(false)
    setWon(false)
  }

  const calculateBullsAndCows = (guess, secret) => {
    let bulls = 0
    let cows = 0

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        bulls++
      } else if (secret.includes(guess[i])) {
        cows++
      }
    }

    return { bulls, cows }
  }

  const isValidGuess = (input) => {
    if (input.length !== 4) return false
    if (!/^\d{4}$/.test(input)) return false

    const digits = input.split("")
    return new Set(digits).size === 4
  }

  const makeGuess = () => {
    if (!isValidGuess(guess)) {
      alert("Por favor, insira 4 dígitos únicos (0-9)")
      return
    }

    const result = calculateBullsAndCows(guess, secretCode)
    const newAttempt = {
      guess,
      bulls: result.bulls,
      cows: result.cows,
      attemptNumber: attempts.length + 1,
    }

    const newAttempts = [newAttempt, ...attempts]
    setAttempts(newAttempts)

    if (result.bulls === 4) {
      setWon(true)
      setGameOver(true)
    } else if (newAttempts.length >= maxAttempts) {
      setGameOver(true)
    }

    setGuess("")
  }

  const showSecret = () => {
    alert(`A senha secreta é: ${secretCode}`)
  }

  useEffect(() => {
    initGame()
  }, [])

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !gameOver) {
      makeGuess()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Target className="mr-3 text-blue-600" />
              Jogo da Senha (Bulls and Cows)
            </h1>
            <p className="text-lg text-gray-600">
              Descubra a senha de 4 dígitos únicos em até {maxAttempts} tentativas!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Como Jogar:</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>A senha contém 4 dígitos únicos (0-9)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Bull:</strong> dígito correto na posição correta
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Cow:</strong> dígito correto na posição errada
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Você tem {maxAttempts} tentativas para acertar</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Tentativas: {attempts.length}/{maxAttempts}
              </div>
              {!gameOver && (
                <div className="text-lg text-gray-600">Restam {maxAttempts - attempts.length} tentativas</div>
              )}
            </div>

            {!gameOver ? (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite 4 dígitos únicos"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-center text-xl font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength="4"
                  />
                  <button
                    onClick={makeGuess}
                    disabled={!isValidGuess(guess)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
                  >
                    Tentar
                  </button>
                </div>
                <button
                  onClick={showSecret}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200 flex items-center justify-center"
                >
                  <Eye className="mr-2" size={16} />
                  Mostrar Senha
                </button>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className={`text-2xl font-bold ${won ? "text-green-600" : "text-red-600"}`}>
                  {won ? "🎉 Parabéns! Você acertou!" : "😞 Fim de jogo!"}
                </div>
                <div className="text-lg text-gray-700">
                  A senha era: <span className="font-mono font-bold text-purple-600">{secretCode}</span>
                </div>
                <button
                  onClick={initGame}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors duration-200 flex items-center justify-center mx-auto"
                >
                  <RefreshCw className="mr-2" size={16} />
                  Novo Jogo
                </button>
              </div>
            )}
          </div>

          {attempts.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-blue-600">Histórico de Tentativas</h2>
              <div className="space-y-3">
                {attempts.map((attempt, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 w-8">#{attempt.attemptNumber}</span>
                      <span className="font-mono text-lg font-bold text-gray-900">{attempt.guess}</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {attempt.bulls} Bulls
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {attempt.cows} Cows
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}