import locationReducer from './locationReducer';
import topArtistsReducer from './artistsReducer';
import topTracksReducer from './tracksReducer';
import imageReducer from './imageReducer';
import currentArtistReducer from './currentArtistReducer'
import artistInfoReducer from './artistInfoReducer';
import loadingReducer from './isLoading';
import errorReducer from './hasErrored';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  location: locationReducer,
  topArtists: topArtistsReducer,
  topTracks: topTracksReducer,
  images: imageReducer,
  currentArtist: currentArtistReducer,
  artistInfo: artistInfoReducer,
  isLoading: loadingReducer,
  hasErrored: errorReducer,
});

export default allReducers;