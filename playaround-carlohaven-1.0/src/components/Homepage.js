import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken } from '../actions/tokenActions';
import { fetchUser } from '../actions/userActions';
import UserPlaylists from './UserPlaylists';
import SongArt from './SongArt';
import logo from '../logo.svg';
import './Homepage.css';

class Homepage extends Component {
  componentDidMount() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if (!hashParams.access_token) {
      console.log('in !hashParams.access_token');
      window.location.href =
        'https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback';
    } else {
      this.props.setToken(hashParams.access_token);
      console.log('hashParams.access_token ', hashParams.access_token);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token);
      console.log('did it resolve?');
      console.log(this.props);
    }
  }

  render() {
    return (
      <div className="Homepage">
        <header>
          <h1> Our Special Carlo Haven Paired Space </h1>
          <h6> Love you bu</h6>
          <p> {this.props.token} </p>
        </header>
        <div>
          <div className="aside">
            <h2> Playlists </h2>
            <UserPlaylists />
          </div>
          <div className="main-content">
            <h2> Songs </h2>
            <SongArt />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUser,
      setToken,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

//http://localhost:3000/callback
// clientid - d6b64adf336e4c3ba2de10f399b70faf
// clientsecret - 65e0f84069e54b26a794564a0eea3cc5
