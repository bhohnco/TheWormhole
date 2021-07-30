import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { getArtistInfo} from '../../utilities/apiCalls';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [response, setResponse] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (response) {
      evaluateResponse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    let requestData = undefined;
    if (searchQuery.length > 0) {
     requestData = await getArtistInfo(searchQuery);
    }
    if (requestData) {
      setResponse(requestData);
    }
  }

  const evaluateResponse = () => {
    if (!response.artist || response === "Error!") {
      setError("Sorry, we couldn't find that artist!");
    } else {
      setVerified(true);
    }
  }

  if (verified) {
    return <Redirect to={`/artist:${searchQuery}`}/>;
  }

  if (error) {
    return (
      <article className="display-error">
        <h4 className="error-message">{error}</h4>
      </article>
    )
  }

  return (
    <form onSubmit={e => e.preventDefault} className='search-bar-box'>
      <input
        required
        className='search-input'
        type='text'
        placeholder='Search For Artist'
        name='input'
        value={searchQuery}
        onChange={event => {event.preventDefault(); setSearchQuery(event.target.value);}}
      />
      <button onClick={event => handleSubmit(event)} className='search-btn'>Search</button>
    </form>
  )
}
export default SearchBar;
