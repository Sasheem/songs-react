import React from 'react';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column 12 wide">
                    <h1>App Component</h1>
                </div>
            </div>
            <div className="ui row">
                <div className="column eight wide">
                        <SongList />
                </div>
            </div>
        </div>
    );
};

export default App;

