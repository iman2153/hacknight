export async function getUserProfile(username: string) {
  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });
  if (!response.ok) {
    throw new Error('User not found');
  }
  const data = await response.json();
  return {
    login: data.login,
    name: data.name,
    avatar_url: data.avatar_url,
    bio: data.bio,
    public_repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    html_url: data.html_url,
    // Add more fields or nested objects as needed
  };
} 