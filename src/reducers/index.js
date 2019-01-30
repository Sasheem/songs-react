import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'MIDDLE KID', duration: '4:05' },
        { title: 'Wings', duration: '3:45' },
        { title: 'Thriller', duration: '7:10' },
        { title: 'In the morning', duration: '3:59' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});