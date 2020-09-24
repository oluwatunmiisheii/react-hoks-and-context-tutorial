import React, { useState, useEffect } from 'react';
import { getKey } from './../util/getKey';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const initState = [
    { title: 'almost home', id: getKey() },
    { title: 'memory gospel', id: getKey() },
    { title: 'the wild wilderness', id: getKey() }
  ]
  const [songs, setSongs] = useState(initState)
  const addSongHandler = (title) => {
    setSongs([...songs, { title, id: getKey() }])
  }
  useEffect(() => {
    console.log('from useEffect hooks =>>>', songs);
  }, [songs])
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      <NewSongForm addSongHandler={addSongHandler} />
    </div>
  );
}

export default SongList;