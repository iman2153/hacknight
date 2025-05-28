import { useState } from 'react'
import './App.css'

function App() {
  const [githubUsername, setGithubUsername] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (githubUsername.trim()) {
      setMessages([...messages, `GitHub username submitted: ${githubUsername}`])
      setGithubUsername('')
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">GitHub Username Chatbox</div>

      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="chat-input"
        />
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  )
}

export default App
