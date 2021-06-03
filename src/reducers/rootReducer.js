import topArtistsReducer from './artistsReducer';
import topTracksReducer from './tracksReducer';
import locationReducer from './locationReducer';
import loadingReducer from './isLoading';
import errorReducer from './hasErrored';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  topArtists: topArtistsReducer,
  topTracks: topTracksReducer,
  location: locationReducer,
  isLoading: loadingReducer,
  hasErrored: errorReducer,
});

export default allReducers;