import { isLoading, hasErrored, actionGetTopArtists } from '../actions/index'


export const fetchTopArtists = (country) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`

  return async (dispatch) =>  {
    try {
      const response = await fetch(url)
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

