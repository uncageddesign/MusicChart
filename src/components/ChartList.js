import React from 'react';

const ChartList = (props) => {

  function handleClick(event) {
    props.onSongSelected(event.target.value);
    console.log(event.target.value);
  }

  if(!props.entry === 0){
    return "Loading Chart";
  }

  const chart = props.songs.map((song, index) => {
    return <li value={index} key={index}>{index + 1}. {song.title.label}</li>
  });

  return (
      <ul onClick={handleClick}>
      {chart}
      </ul>
  )
}

export default ChartList;
