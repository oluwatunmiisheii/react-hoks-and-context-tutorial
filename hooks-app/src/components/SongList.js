import React, { useState } from 'react';
import { getKey } from './../util/getKey';

const SongList = () => {
  const initState = [
    { title: 'almost home', id: getKey() },
    { title: 'memory gospel', id: getKey() },
    { title: 'the wild wilderness', id: getKey() }
  ]
  const addSongHandler = () => {
    setSongs([...songs, { title: 'new song', id: getKey() }])
  }
  const [songs, setSongs] = useState(initState)
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      <button onClick={addSongHandler}>add song</button>
    </div>
  );
}

export default SongList;