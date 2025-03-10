require('dotenv').config(); // .env読み込み


/**
 * Spotify Web API へ曲名とアーティストを送って結果を取得する関数
 * @param {string} songName 
 * @param {string} artistName 
 * @returns {Promise<object>} Spotify APIの検索結果
 */
const getSongData = async (token, songName, artistName) => {
  try {
    // クエリ構築
    // クエリ構築
    const encodedTrack = encodeURIComponent(`track:${songName}`);
    const encodedArtist = encodeURIComponent(`artist:${artistName}`);
    const url = `https://api.spotify.com/v1/search?q=${encodedTrack}+${encodedArtist}&type=track&limit=1`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401) {
      tokenCache.value = null; // トークン無効化
      throw new Error('トークンが無効です。再認証が必要です');
    }
    
    if (!response.ok) {
      // 失敗時処理
      throw new Error(`Spotify API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // サービス層はエラーを投げて上位でハンドリングしてもらう
    console.error(error);
    throw error;
  }
};
  
  module.exports = {
    getSongData
  };