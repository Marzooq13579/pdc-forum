import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../../context/Notes/NoteContext";

const QueItem = (props) => {
  const context = useContext(NoteContext);
  const { note } = props;

  return (
<>
    <div className="middle-nav">
      <div className="questions">
        <div className="que">
          <div className="name">{note.name}</div>
          <div className="q">{note.title}</div>
          <div className="statement">{note.description}</div>
          <div className="cont">
            <div className="answer"> 2 Answers</div>
            <div className="views">1k views</div>
            <div className="answer-btn">
              <Link to={`/answer/${note._id}`}>Answer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </>
  );
};

export default QueItem;