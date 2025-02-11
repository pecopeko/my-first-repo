export const sendSongs = async (payload: { bestSong: string; desiredSong: string }) => {
    const response = await fetch('https://your-backend-api.com/api/songs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }
    return response.json();
  };
