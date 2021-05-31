import React from 'react';

const TopTracks = ({topTracks}) => {
  console.log(topTracks)
  const trackFind = topTracks.tracks.reduce((finalArray, currentArtist) => {
    finalArray.push({name: currentArtist.artist.name, title: currentArtist.name});
    return finalArray
  },[])
  return (
    <article className='top-tracks-box'>
      <h3> Top Tracks in *location* </h3>
      <div className='tracks-list'>
        <ol>
          <li className='top-track'>{trackFind[0]}</li>
          <li className='top-track'>{trackFind[1]}</li>
          <li className='top-track'>{trackFind[2]}</li>
          <li className='top-track'>{trackFind[3]}</li>
          <li className='top-track'>{trackFind[4]}</li>
          <li className='top-track'>{trackFind[5]}</li>
          <li className='top-track'>{trackFind[6]}</li>
          <li className='top-track'>{trackFind[7]}</li>
          <li className='top-track'>{trackFind[8]}</li>
          <li className='top-track'>{trackFind[9]}</li>
        </ol>
      </div>
    </article>
  )
}

export default TopTracks;