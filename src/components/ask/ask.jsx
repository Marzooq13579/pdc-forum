import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../../context/Notes/NoteContext";
import AskFooter from "../footer/askFooter";
import Header from "../menu/header";
import "./ask.css";

function Ask() {



    const context = useContext(NoteContext);
    const { addNote } = context;
  
    // Define initial state using object destructuring
    const [note, setNote] = useState({
      title: "",
      description: "",
      expectation: "",
      tag: "",
    });
    const navigate = useNavigate();

    const handleClick = async (e) => {

            try {
                e.preventDefault();
                const response = await addNote(
                  note.title,
                  note.description,
                  note.expectation,
                  note.tag
                );
                alert('success');
                navigate('/home')
                
            } catch (error) {
                alert('failed');
            }
  
    };
  
    const onChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value });
    };
    
  return (
    <>
      <Header />
      <div className="body">
        <div className="container1">
          <h1>Ask Questions</h1>

          <form   onSubmit={handleClick}>
            <div className="section">
              <label htmlFor="title">Title</label>
              <input
                placeholder="Enter the title  related to your problem..."
                type="text"
                id="title"
                name="title"
                onChange={onChange}
                minLength={10}
              required/>
            </div>
            <div className="section">
              <label htmlFor="description">Details of your problem</label>
              <textarea
                placeholder="enter the detailed explanation of your project..."
                name="description"
                id="description"
                onChange={onChange}
                minLength={10}
              required></textarea>
            </div>

            <div className="section">
              <label htmlFor="expectation">what you are expecting?</label>
              <textarea
                placeholder="what is your expected answer?"
                name="expectation"
                id="expectation"
                onChange={onChange}
                minLength={10}
              required></textarea>
            </div>
            <div className="section">
              <label htmlFor="tags">tags</label>
              <input
                placeholder="enter atleast 5 tags"
                type="text"
                name="tag"
                id="tags"
                onChange={onChange}
                minLength={5}
              required/>
            </div>

            <div className="buttons">
              <input type="submit" className="bttn" />
            </div>
          </form>
        </div>
      </div>
      <AskFooter />
    </>
  );
}
export default Ask;
