import React from 'react';
import ChartList from '../components/ChartList';
import SongDetails from '../components/SongDetails';

class ChartContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };

    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error(err))
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({selectedSong: selectedSong})
  }

  render(){
    return (
      <div>
        <header>
          <h1>UK Charts</h1>
          <h3>Powered by iTunes</h3>
        </header>
        <ChartList songs={this.state.songs} onSongSelected={this.handleSongSelected}/>
        <SongDetails song={this.state.selectedSong}/>
      </div>
    );
  }
}

export default ChartContainer;
