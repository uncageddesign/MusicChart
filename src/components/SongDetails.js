import React from 'react';

const SongDetails = (props) => {

  if(!props.song){
    return (
      <p>Select For More Details</p>
    )
  }

  return (
    <div id='details'>
      <h3>{props.song.title.label}</h3>
      <p>{props.song.rights.label}</p>
    </div>
  )
}

export default SongDetails;
