import locationReducer from './locationReducer';
import topArtistsReducer from './artistsReducer';
import topTracksReducer from './tracksReducer';
import imageReducer from './imageReducer';
import artistInfoReducer from './artistInfoReducer';
import loadingReducer from './isLoading';
import errorReducer from './hasErrored';
import searchReducer from './searchReducer';
import dropdownReducer from './dropdownReducer';
import { reducer as Form } from 'redux-form';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  location: locationReducer,
  topArtists: topArtistsReducer,
  topTracks: topTracksReducer,
  artistImages: imageReducer,
  artistInfo: artistInfoReducer,
  isLoading: loadingReducer,
  hasErrored: errorReducer,
  Form
});

export default allReducers;