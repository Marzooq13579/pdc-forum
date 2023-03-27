import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AskBtn from "../ask/AskBtn";
import Footer from "../footer/Footer";
import Header from "../menu/header";
import LeftNav from "../menu/leftnav";
import QueItem from "./queitems";
import "./questions.css";
import NoteContext from '../../context/Notes/NoteContext';
import Rquestions from "./Rquestions";

export default function AllQuestions() {
  const navigate = useNavigate();
    const context = useContext(NoteContext);
    const {notes, GetNotes} = context;
useEffect(() => {

  GetNotes();

}, [])

const ref = useRef(null)
const updateNote = (note) =>{
    ref.current.click();
}

  return(
 <>
       <Header />
      <LeftNav />
      <div className="something">
        <h1>Questions</h1>
      </div>

  {notes.length===0 && "no notes to display"}
{notes.map((note) => {
  return <QueItem  key={note._id}  note={note}/>
})}
      <AskBtn />
      <Footer />
    </>
  );
}
