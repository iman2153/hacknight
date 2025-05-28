import { useState } from 'react'
import './App.css'
import { getUserProfile } from './githubApi'
import UserProfile from './UserProfile'

function App() {
  const [githubUsername, setGithubUsername] = useState('')
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setUser(null)
    if (githubUsername.trim()) {
      setLoading(true)

      setHasSearched(true)
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
    <div className="app-container">

      <div className="search-container">
        
        <h1 className="app-title">GitHub Profile Finder</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            placeholder="Enter GitHub username..."
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
      
      {hasSearched && (
        <div className="results-container">
          {error && <div className="error-message">{error}</div>}
          {user && <UserProfile user={user} />}
        </div>
      )}
    </div>
  )
}

export default App
