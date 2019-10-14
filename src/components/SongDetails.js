import React from 'react';

const SongDetails = (props) => {

  if(!props.song){
    return (
      <p>Music be here</p>
    )
  }

  return (
    <div id='details'>
      <h3>{props.song.title.label}</h3>
    </div>
  )
}

export default SongDetails;
