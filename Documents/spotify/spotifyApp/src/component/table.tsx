import React from 'react';

const KeyTable: React.FC = () => {
  return (
    <div className="w-full max-w-3xl overflow-x-auto">
      <table className="bg-gray-800 rounded-lg shadow-lg w-full">
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

export default KeyTable;
