import React, { useState } from 'react';
import { handleSubmit } from './utils/submit';
import './App.css'

const KeySearchWebsite: React.FC = () => {
    const [songToSing, setSongToSing] = useState('');
    const [bestSong, setBestSong] = useState('');  
    const [songToSingArtist, setSongToSingArtist] = useState('');
    const [bestSongArtist, setBestSongArtist] = useState('');

    const handleReset = () => {
        setSongToSing('');
        setBestSong('');
        setSongToSingArtist('');
        setBestSongArtist('');
    };

    const onSubmit = () => {
        handleSubmit(songToSing, bestSong, songToSingArtist, bestSongArtist);
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Find the perfect key for you.</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <div className="mb-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <p className="text-lg font-semibold w-full md:w-1/6 text-center md:text-left whitespace-nowrap">
        歌える曲
      </p>

      {/* 歌手名 */}
      <input
        type="text"
        placeholder="歌手名"
        value={bestSongArtist}
        onChange={(e) => setBestSongArtist(e.target.value)}
        className="w-full md:flex-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* 曲名 */}
      <input
        type="text"
        placeholder="曲名"
        value={bestSong}
        onChange={(e) => setBestSong(e.target.value)}
        className="w-full md:flex-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* 🎵 歌いたい曲入力フィールド */}
    <div className="mb-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <p className="text-lg font-semibold w-full md:w-1/6 text-center md:text-left whitespace-nowrap">
        歌いたい曲
      </p>

      {/* 歌手名 */}
      <input
        type="text"
        placeholder="歌手名"
        value={songToSingArtist}
        onChange={(e) => setSongToSingArtist(e.target.value)}
        className="w-full md:flex-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* 曲名 */}
      <input
        type="text"
        placeholder="曲名"
        value={songToSing}
        onChange={(e) => setSongToSing(e.target.value)}
        className="w-full md:flex-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
                <div className="flex justify-between mt-4">
                <button
  onClick={handleReset}
  className="!bg-gray-600 text-white py-2 px-4 rounded hover:!bg-gray-500"
>
  Reset
</button>

                    <button
                        onClick={onSubmit}
                        className="!bg-gray-600 text-white py-2 px-4 rounded hover:!bg-gray-500"
                    >
                        Submit
                    </button>
                </div>
            </div>
            <table className="mt-8 w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="p-4 text-left">Key of your best song</th>
                        <th className="p-4 text-left">Key of the song you want to sing</th>
                        <th className="p-4 text-left">Key adjustment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">C</td>
                        <td className="p-4">D</td>
                        <td className="p-4">2 steps up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">G</td>
                        <td className="p-4">A</td>
                        <td className="p-4">2 steps up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">F</td>
                        <td className="p-4">E</td>
                        <td className="p-4">1 step down</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">A</td>
                        <td className="p-4">B</td>
                        <td className="p-4">2 steps up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">D</td>
                        <td className="p-4">C</td>
                        <td className="p-4">1 step down</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">E</td>
                        <td className="p-4">F</td>
                        <td className="p-4">1 step up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">B</td>
                        <td className="p-4">C</td>
                        <td className="p-4">1 step up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">C#</td>
                        <td className="p-4">D#</td>
                        <td className="p-4">2 steps up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">G#</td>
                        <td className="p-4">A#</td>
                        <td className="p-4">2 steps up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">F#</td>
                        <td className="p-4">E#</td>
                        <td className="p-4">1 step down</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">A#</td>
                        <td className="p-4">B#</td>
                        <td className="p-4">1 step up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">D#</td>
                        <td className="p-4">C#</td>
                        <td className="p-4">1 step down</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">C</td>
                        <td className="p-4">A</td>
                        <td className="p-4">2 steps down</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">D</td>
                        <td className="p-4">E</td>
                        <td className="p-4">1 step up</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-4">E</td>
                        <td className="p-4">D</td>
                        <td className="p-4">1 step down</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default KeySearchWebsite;