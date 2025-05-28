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
  return response.json();
} 