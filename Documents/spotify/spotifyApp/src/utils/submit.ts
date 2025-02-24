import axios from 'axios';

export const handleSubmit = async (
    songToSing: string,
    bestSong: string,
    songToSingArtist: string,
    bestSongArtist: string
) => {
    try {
        const response = await axios.post('http://localhost:3000/api/songs', {
            songToSing,
            bestSong,
            songToSingArtist,
            bestSongArtist
        });

        console.log('Response from server:', response.data);
    } catch (error) {
        console.error('Error sending data to the backend:', error);
    }
};
