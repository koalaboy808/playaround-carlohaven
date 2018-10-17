import React, { Component } from 'react';
// import './UserPlaylists.css';

class SongArt extends Component {
  // componentWillReceiveProps (nextProps) {
  //   if(nextProps.userId !== '' && nextProps.token !== '') {
  //     this.props.fetchPlaylistsMenu(nextProps.userId, nextProps.token);
  //   }
  // }
  //
  renderSongs() {
    return this.props.songs.map(song => {
      return (
        <li key={song.track.uri}>{song.track.name}</li>
        // < SongArt />
      );
    });
  }

  render() {
    console.log('songs in songart component, ', this.props.songs);
    return <div>{this.props.songs && this.renderSongs()}</div>;
    // return (
    //   <div className='user-playlist-container'>
    //     <h3 className='user-playlist-header'>Playlists</h3>
    //     {
    //       this.props.playlistMenu && this.renderPlaylists()
    //     }
    //   </div>
    // );
  }
}

export default SongArt;
