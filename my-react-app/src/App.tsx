import { useState } from 'react'
import './App.css'
import { getUserProfile } from './githubApi'
import UserProfile from './UserProfile'

function App() {
  const [githubUsername, setGithubUsername] = useState('')
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setUser(null)
    if (githubUsername.trim()) {
      setLoading(true)
      try {
        const data = await getUserProfile(githubUsername.trim())
        setUser(data)
      } catch (err) {
        setError('User not found')
      } finally {
        setLoading(false)
      }
      setGithubUsername('')
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">GitHub Username Lookup</div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="chat-input"
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
      <div className="chat-messages">
        {error && <div className="message" style={{ color: 'red' }}>{error}</div>}
        {user && <UserProfile user={user} />}
      </div>
    </div>
  )
}

export default App
