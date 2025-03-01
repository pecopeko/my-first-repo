const { getSongData } = require('../services/spotifyService');

/**
 * /api/songs POSTの処理
 *   - リクエストから曲名とアーティスト名を受け取る
 *   - Spotify APIに2回問い合わせる (例：songToSing, bestSong など)
 *   - 取得結果をまとめてレスポンスに返却する
 */
const handlePostSongs = async (req, res) => {
  try {
    const { songToSing, bestSong, songToSingArtist, bestSongArtist } = req.body;

    // 1回目のSpotify検索
    const firstResult = await getSongData(songToSing, songToSingArtist);

    // 2回目のSpotify検索
    const secondResult = await getSongData(bestSong, bestSongArtist);

    // 好みで配列にするかオブジェクトにするか
    // ここではまとめて返却
    const responseData = {
      firstSong: firstResult,
      secondSong: secondResult
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error in handlePostSongs:', error);
    res.status(500).json({ error: 'Failed to fetch song data from Spotify' });
  }
};

module.exports = {
  handlePostSongs
};