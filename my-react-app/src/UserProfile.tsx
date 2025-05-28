import React from 'react'

interface UserProfileProps {
  user: {
    avatar_url: string
    name: string
    login: string
    bio: string
    location: string
    public_repos: number
    html_url: string
  }
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => (
  <div className="user-profile">
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
    </a>
    <h2>{user.name || user.login}</h2>
    <p className="username">@{user.login}</p>
    {user.bio && <p className="bio">{user.bio}</p>}
    {user.location && <p className="location">📍 {user.location}</p>}
    <p className="repos">Repos: {user.public_repos}</p>
  </div>
)

export default UserProfile 