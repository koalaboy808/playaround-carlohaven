import React, { Component } from 'react';
// import './UserPlaylists.css';

class UserPlaylists extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== '' && nextProps.token !== '') {
      this.props.fetchPlaylistsMenu(nextProps.userId, nextProps.token);
    }
  }

  renderPlaylists() {
    return this.props.playlistMenu.map(playlist => {
      const getPlaylistSongs = () => {
        this.props.fetchPlaylistSongs(
          playlist.owner.id,
          playlist.id,
          this.props.token
        );
        // this.props.updateHeaderTitle(playlist.name);
      };

      return (
        <li onClick={getPlaylistSongs} key={playlist.id}>
          {playlist.name}
        </li>
      );
    });
  }

  render() {
    console.log('songs, ', this.props.songs);
    return (
      <div className="user-playlist-container">
        <h3 className="user-playlist-header">Playlists</h3>
        {this.props.playlistMenu && this.renderPlaylists()}
      </div>
    );
  }
}

export default UserPlaylists;
