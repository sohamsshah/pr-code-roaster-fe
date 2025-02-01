import { useState } from 'react'
import Input from './components/Input'
import Results from './components/Results'

function App() {
  const [prLink, setPrLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  console.log('hello world')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prLink) return

    setLoading(true)
    try {
      const response = await fetch('https://pr-code-roaster.onrender.com/roast-pr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prUrl: prLink }),
      })
      const data = await response.json()
      setResult(data.roastDocument)
    } catch (error) {
      console.error(error)
      setResult('Error: Failed to analyze PR')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="">
      <div className="max-w-6xl mx-auto pt-12">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-black text-white mb-6 drop-shadow-lg">
            PR Code Roaster
            <span className="ml-4 animate-bounce inline-block">🔥</span>
          </h1>
          <p className="text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Level up your code review game with our AI-powered roasting machine!
          </p>
        </div>

        {/* Input Component */}
        <Input 
          prLink={prLink}
          setPrLink={setPrLink}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        {/* Results Component */}
        {result && !loading && <Results result={result} />}
      </div>
    </div>
  )
}

export default App
