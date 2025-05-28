export async function getUserProfile(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok) {
    throw new Error('User not found')
  }
  return response.json()
} 