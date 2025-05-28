import React from 'react'

interface UserProfileProps {
  user: {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
  };
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-6">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-64 h-64 rounded-md"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h2 className="text-2xl font-semibold text-foreground">{user.name}</h2>
            <span className="text-muted-foreground text-lg">({user.login})</span>
          </div>
          
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 text-sm bg-[#21262d] text-[#c9d1d9] rounded-md border border-[#30363d] hover:bg-[#30363d] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Follow
          </a>

          {user.bio && (
            <p className="mt-4 text-[#c9d1d9] leading-relaxed">{user.bio}</p>
          )}

          <div className="mt-4 flex items-center space-x-4 text-[#8b949e]">
            <a href={`${user.html_url}?tab=followers`} className="hover:text-[#c9d1d9] transition-colors">
              <span className="font-semibold text-[#c9d1d9]">{user.followers}</span> followers
            </a>
            <span>·</span>
            <a href={`${user.html_url}?tab=following`} className="hover:text-[#c9d1d9] transition-colors">
              <span className="font-semibold text-[#c9d1d9]">{user.following}</span> following
            </a>
            <span>·</span>
            <a href={`${user.html_url}?tab=repositories`} className="hover:text-[#c9d1d9] transition-colors">
              <span className="font-semibold text-[#c9d1d9]">{user.public_repos}</span> repositories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile 