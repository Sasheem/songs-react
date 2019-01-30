// Action creator, must return an action object
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};