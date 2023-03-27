import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../../context/Notes/NoteContext';
import QueItem from './queitems';
import './questions.css';

function Rquestions() {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, GetNotes } = context;
  const [displayedNotes, setDisplayedNotes] = useState([]);
  const [numNotesToDisplay, setNumNotesToDisplay] = useState(10);

  useEffect(() => {
    GetNotes();
  }, []);

  useEffect(() => {
    setDisplayedNotes(notes.slice(0, numNotesToDisplay));
  }, [notes, numNotesToDisplay]);

  const ref = useRef(null);
  const updateNote = (note) => {
    ref.current.click();
  };

  const loadMore = () => {
    setNumNotesToDisplay(numNotesToDisplay + 10);
  };

  return (
    <>
      {displayedNotes.length === 0 && ''}
      {displayedNotes.map((note) => {
        return <QueItem key={note._id} note={note} />;
      })}
      {numNotesToDisplay < notes.length && (
        <button className='load_btn' onClick={loadMore}>Load more...</button>
      )}
    </>
  );
}

export default Rquestions;
