import { isLoading, hasErrored, actionGetTopArtists } from '../actions/index'

export const fetchTopArtists = () => {
  console.log("am i here")
  const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`
  return dispatch => {
    dispatch({
      type: 'GET_TOP_ARTIST_DATA',
      isLoading
    })
    //then we wanna return this block here
   //
  return
    try {
      const response = fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(actionGetTopArtists(data))
      } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
