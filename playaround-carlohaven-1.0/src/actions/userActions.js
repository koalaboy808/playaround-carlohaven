export const fetchUserSuccess = user => {
  console.log('in fetchUserSuccess');
  return {
    type: 'FETCH_USER_SUCCESS',
    user,
  };
};

export const fetchUserError = user => {
  console.log('in fetchUserError');
  console.log('this is the user, ', user);
  return {
    type: 'FETCH_USER_ERROR',
    user,
  };
};

export const fetchUser = accessToken => {
  console.log('in fetchUser and here is the accessToken: ', accessToken);
  return dispatch => {
    console.log('in fetchUser dispatch');
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        Authorization: 'Bearer ' + accessToken,
      }),
    });

    fetch(request)
      .then(res => {
        // send user back to homepage if no token
        if (res.statusText === 'Unauthorized') {
          window.location.href = './';
        }
        // console.log("res.json(), ", res.json() );
        return res.json();
      })
      .then(res => {
        console.log('success');
        console.log(res);
        dispatch(fetchUserSuccess(res));
      })
      .catch(err => {
        console.log('damnit');
        dispatch(fetchUserError(err));
      });
  };
};

export const addSongToLibrarySuccess = songId => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_SUCCESS',
    songId,
  };
};

export const addSongToLibraryError = () => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_ERROR',
  };
};

export const addSongToLibrary = (accessToken, id) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/me/tracks?ids=${id}`,
      {
        method: 'PUT',
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
        }),
      }
    );

    fetch(request)
      .then(res => {
        if (res.ok) {
          dispatch(addSongToLibrarySuccess(id));
        }
      })
      .catch(err => {
        dispatch(addSongToLibraryError(err));
      });
  };
};
