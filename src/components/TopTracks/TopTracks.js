import React from 'react';

const TopTracks = ({topTracks}) => {

  const trackFind = topTracks.tracks.track.reduce((finalArray, currentArtist) => {
    finalArray.push({artist: currentArtist.artist.name, title: currentArtist.name});
    return finalArray;
  },[])

  console.log(trackFind);

  return (
    <article className='top-tracks-box'>
      <h3> Top Tracks in *location* </h3>
      <div className='tracks-list'>
        <ol>
          <li >{trackFind[0].artist} - "{trackFind[0].title}"</li>
          <li >{trackFind[1].artist} - "{trackFind[1].title}"</li>
          <li >{trackFind[2].artist} - "{trackFind[2].title}"</li>
          <li >{trackFind[3].artist} - "{trackFind[3].title}"</li>
          <li >{trackFind[4].artist} - "{trackFind[4].title}"</li>
          <li >{trackFind[5].artist} - "{trackFind[5].title}"</li>
          <li >{trackFind[6].artist} - "{trackFind[6].title}"</li>
          <li >{trackFind[7].artist} - "{trackFind[7].title}"</li>
          <li >{trackFind[8].artist} - "{trackFind[8].title}"</li>
          <li >{trackFind[9].artist} - "{trackFind[9].title}"</li>
        </ol>
      </div>
    </article>
  )
}

export default TopTracks;