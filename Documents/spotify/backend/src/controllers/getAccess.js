
const getAccessToken = async () => {
  try {
    // 環境変数から ClientID / ClientSecret を取得
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    console.log(clientId, clientSecret);
    console.log('Client ID:', process.env.SPOTIFY_CLIENT_ID);
console.log('Client Secret:', process.env.SPOTIFY_CLIENT_SECRET);

    // Basic 認証に使う文字列を作成
    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    // アクセストークンを取得
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // ClientIDとClientSecretをBase64でエンコードしたものを使ってBasic認証
        'Authorization': `Basic ${authString}`
      },
      body: 'grant_type=client_credentials'
    });

    // エラー処理
    if (!response.ok) {
      throw new Error('Failed to get access token from Spotify');
    }

    // JSON からアクセストークンを取り出して返す
    const data = await response.json();
    console.log(data.access_token);
    return data.access_token; 
  } catch (error) {
    console.error('Error fetching Spotify access token:', error);
    throw error;
  }
};

module.exports = {
  getAccessToken
};