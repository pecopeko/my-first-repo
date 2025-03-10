

const getKeyInfo = async (token, trackId) => {
    const keyMap = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    console.log(trackId);
    const url = `https://api.spotify.com/v1/audio-features/${trackId}`;
    const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    console.log(data);
    return keyMap[data.key];
  };

  module.exports = {
    getKeyInfo
  };