import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import playlistReducer from './playlistReducer';
import songsReducer from './songsReducer';

const rootReducer = combineReducers({
  userReducer,
  tokenReducer,
  playlistReducer,
  songsReducer,
});

export default rootReducer;
