import locationReducer from './locationReducer';
import topArtistsReducer from './artistsReducer';
import topTracksReducer from './tracksReducer';
import imagesReducer from './imagesReducer';
import artistInfoReducer from './artistInfoReducer';
import loadingReducer from './isLoading';
import errorReducer from './hasErrored';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  location: locationReducer,
  topArtists: topArtistsReducer,
  topTracks: topTracksReducer,
  artistImages: imagesReducer,
  artistInfo: artistInfoReducer,
  isLoading: loadingReducer,
  hasErrored: errorReducer
});

export default allReducers;
