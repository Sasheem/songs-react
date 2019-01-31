import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class ClassList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="ui divided list">
                <h2>Your Songs</h2>
                {this.renderList()}
            </div>
            
        );
    }
}

// state passed in of our redux store
const mapStateToProps = (state) => {
    // take the data in our store, 
    // run some computation on it
    // eventually shows up as props to inside of our component
    // can be called anything ... getMyState() if we wanted
    return { songs: state.songs };
};
// now above I can use this.props to access what this function just returned

export default connect(mapStateToProps, { selectSong })(ClassList);