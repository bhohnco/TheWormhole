import React from 'react';

const TopTracks = () => {
  // const trackFind = topTracks.tracks.reduce((finalArray, currentArtist) => {
  //   finalArray.push({name: currentArtist.artist.name, title: currentArtist.name});
  //   return finalArray
  // },[])
  return (
    <article className='top-tracks-box'>
      <h3> Top Tracks in *location* </h3>
      <div className='tracks-list'>
        <ol className='top-track'>
          <li >Track #1</li>
          <li >Track #2</li>
          <li >Track #3</li>
          <li >Track #4</li>
          <li >Track #5</li>
          <li >Track #6</li>
          <li >Track #7</li>
          <li >Track #8</li>
          <li >Track #9</li>
          <li >Track #10</li>
        </ol>
      </div>
    </article>
  )
}

export default TopTracks;
