// import { isLoading, hasErrored, artists } from '../actions';
// import { useSelector, useDispatch } from 'react-redux';

// const dispatch = useDispatch();

// console.log("HELLO")

// export const fetchTopArtists = (location) => {

//   const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${location}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`
  
//   return async (dispatch) => {

//     try {
//       dispatch(isLoading(true));
//       const response = await fetch(url)
//       if(!response.ok) {
//         throw Error(response.statusText)
//       }
//       const data = await response.json()
//       dispatch(artists(data));
//       dispatch(isLoading(false));
//       } catch (error) {
//         dispatch(hasErrored(error.message))
//       }

//     }

// }