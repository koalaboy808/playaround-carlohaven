import React, { Component } from 'react';
import SongArt from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchPlaylistsMenu } from '../../actions/playlistActions';
// import { fetchPlaylistsMenu, fetchPlaylistSongs } from '../../actions/playlistActions';
// import { updateHeaderTitle } from '../../actions/uiActions';

const mapStateToProps = state => {
  return {
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // fetchPlaylistsMenu,
      // fetchPlaylistSongs
      // updateHeaderTitle
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  null
)(SongArt);
