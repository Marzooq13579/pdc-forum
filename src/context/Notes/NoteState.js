import React, { useState } from "react";
import NoteContext from "./NoteContext";

const host = "http://localhost:5000"
const NoteState = (props) => {

const notesinitial =[]
  const [notes, setNotes] = useState(notesinitial)



//   get note
const GetNotes = async () =>{
    // api
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-token"  : localStorage.getItem('token')
        }
      });
    const json = await response.json();
setNotes(json)
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

//delete note


const deleteNote = async (id) => {

    //api
    const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token"  :  localStorage.getItem('token')
        },
      });
        const json = response.json(); 
        console.log(json)
    
    console.log("Deleting the note with id of " + id);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }
  
// edit note
const editNote = async (id, title, description, tag) =>{
        //api
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-token"  :  localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag}), 
          });
            // const jason = response.json(); 
        



        //logic
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id ===id){
            element.title =  title;
            element.tag =  tag;
            element.description =  description;

        }
        
    }
    
}



    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, GetNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
