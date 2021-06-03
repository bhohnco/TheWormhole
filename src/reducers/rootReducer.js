import topArtistsReducer from './artistsReducer';
import topTracksReducer from './tracksReducer';
import locationReducer from './locationReducer';
import loadingReducer from './isLoading';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  topArtists: topArtistsReducer,
  topTracks: topTracksReducer,
  location: locationReducer,
  isLoading: loadingReducer,
});

export default allReducers;