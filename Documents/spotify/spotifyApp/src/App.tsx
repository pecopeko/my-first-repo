import React, { useState } from 'react';
import './App.css'

const KeySearchWebsite: React.FC = () => {
    const [songToSing, setSongToSing] = useState('');
    const [bestSong, setBestSong] = useState('');

    const handleReset = () => {
        setSongToSing('');
        setBestSong('');
    };

    const handleSubmit = () => {
        // ここにSubmitの処理を書く
        console.log('Song to Sing:', songToSing);
        console.log('Best Song:', bestSong);
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Find the perfect key for you.</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Song you want to sing"
                        value={songToSing}
                        onChange={(e) => setSongToSing(e.target.value)}
                        className="w-full p-2 mb-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Your best song"
                        value={bestSong}
                        onChange={(e) => setBestSong(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handleReset}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-red-500"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
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