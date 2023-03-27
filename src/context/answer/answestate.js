import React, { useState } from "react";
import NoteContext from "./NoteContext";

const host = "http://localhost:5000"
const NoteState = (props) => {

const notesinitial =[]
  const [notes, setNotes] = useState(notesinitial)

}




//add note
const addNote = async (title, description, tag, expectation) => {
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, expectation }),
    });
  
    const newNote = await response.json();
    console.log(newNote)
    setNotes([...notes, newNote]);
  };