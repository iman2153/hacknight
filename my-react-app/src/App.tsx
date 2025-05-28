import { useState, useEffect } from 'react'
import './App.css'
import { getUserProfile } from './githubApi'
import UserProfile from './UserProfile'


function App() {
  const [githubUsername, setGithubUsername] = useState('')
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

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
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-foreground">GitHub Profile Stalker</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-border rounded-xl p-10 mb-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex gap-6">
                <input
                  type="text"
                  value={githubUsername}
                  onChange={(e) => setGithubUsername(e.target.value)}
                  placeholder="Enter GitHub username..."
                  className="search-input"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="search-button"
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </form>
          </div>

          {hasSearched && (
            <div className="bg-card border border-border rounded-md p-6">
              {error && (
                <div className="p-4 bg-[#da3633]/10 text-[#f85149] rounded-md border border-[#da3633]/20">
                  {error}
                </div>
              )}
              {user && <UserProfile user={user} />}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
