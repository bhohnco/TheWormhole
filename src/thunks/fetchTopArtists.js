import { isLoading, hasErrored, actionGetTopArtists } from '../actions/index'
const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`

console.log("am i here")
export const fetchTopArtists = () => {
  return dispatch => {
    dispatch(isLoading());
    return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(actionGetTopArtists(json.data));
          return json.data;
        })
        .catch(error => dispatch(hasErrored(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

  // return dispatch => {
  //   dispatch({
  //     type: 'GET_TOP_ARTIST_DATA',
  //     actionGetTopArtists
  //   })
  //   //then we wanna return this block here
  //   //
  //   console.log(dispatch)
  //   return async (dispatch) => {
  //     try {
  //       let res = await fetch(url)
  //       dispatch ({
  //         type: 'GET_TOP_ARTIST_DATA',
  //         playload: res.data,
  //       });
  //       console.log(data)
  //       // // const data = response.json()
  //       // dispatch(actionGetTopArtists(data.topArtists))
  //       return true;
  //     } catch (error) {
  //       console.log(error, "notWorking")
  //     }
  //   }
  // }

