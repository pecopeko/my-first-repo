import React from 'react';
import TextInput from './textinput';
import Button from './button';

const KeyForm: React.FC = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mb-8">
      <div className="mb-4">
        <TextInput placeholder="Song you want to sing" />
        <TextInput placeholder="Your best song" />
      </div>
      <div className="flex justify-between">
        <Button>Reset</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default KeyForm;
