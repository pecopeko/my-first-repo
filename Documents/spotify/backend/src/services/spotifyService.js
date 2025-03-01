require('dotenv').config(); // .env読み込み
const fetch = require('node-fetch');

/**
 * Spotify Web API へ曲名とアーティストを送って結果を取得する関数
 * @param {string} songName 
 * @param {string} artistName 
 * @returns {Promise<object>} Spotify APIの検索結果
 */
const getSongData = async (songName, artistName) => {
  try {
    // 実際はトークン取得手続きが必要(下記は例)
    const token = await getAccessToken(); // ClientCredentialsフローなど

    const query = encodeURIComponent(`${songName} ${artistName}`);
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
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


const getAccessToken = async () => {
    // 例：環境変数を用いたID/Secretの取得
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
    // 例として単にアクセストークンを返すダミー
    // 実際は fetch などでトークン取得し、JSONのaccess_tokenを返す
    return 'YOUR_SPOTIFY_ACCESS_TOKEN';
  };
  
  module.exports = {
    getSongData
  };